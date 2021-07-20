
import { Component, React, useRef } from 'react'
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from 'draft-js'
import styles from './layout.module.css'

export default class Notepad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createWithContent(convertFromRaw(initialData)),
      showToolbar: false,
      windowWidth: 0,
      toolbarMeasures: {
        w: 0,
        h: 0,
      },
      selectionMeasures: {
        w: 0,
        h: 0,
      },
      selectionCoordinates: {
        x: 0,
        y: 0,
      },
      toolbarCoordinates: {
        x: 0,
        y: 0,
      },
      showRawData: false,
    }

    this.focus = () => this.editor.focus()
    this.onChange = (editorState) => this.setState({ editorState })
  }

  onClickEditor = () => {
    this.focus()
    this.checkSelectedText()
  }

  // 1- Check if some text is selected
  checkSelectedText = () => {
    if (typeof window !== 'undefined') {
      const text = window.getSelection().toString()
      if (text !== '') {
        // 1-a Define the selection coordinates
        this.setSelectionXY()
      } else {
        // Hide the toolbar if nothing is selected
        this.setState({
          showToolbar: false,
        })
      }
    }
  }

  // 2- Identify the selection coordinates
  setSelectionXY = () => {
    var r = window.getSelection().getRangeAt(0).getBoundingClientRect()
    var relative = document.body.parentNode.getBoundingClientRect()
    // 2-a Set the selection coordinates in the state
    this.setState(
      {
        selectionCoordinates: r,
        windowWidth: relative.width,
        selectionMeasures: {
          w: r.width,
          h: r.height,
        },
      },
      () => this.showToolbar()
    )
  }

  // 3- Show the toolbar
  showToolbar = () => {
    this.setState(
      {
        showToolbar: true,
      },
      () => this.measureToolbar()
    )
  }

  // 4- The toolbar was hidden until now
  measureToolbar = () => {
    // 4-a Define the toolbar width and height, as it is now visible
    this.setState(
      {
        toolbarMeasures: {
          w: this.elemWidth,
          h: this.elemHeight,
        },
      },
      () => this.setToolbarXY()
    )
  }

  // 5- Now that we have all measures, define toolbar coordinates
  setToolbarXY = () => {
    let coordinates = {}

    const {
      selectionMeasures,
      selectionCoordinates,
      toolbarMeasures,
      windowWidth,
    } = this.state

    const hiddenTop = selectionCoordinates.y < toolbarMeasures.h
    const hiddenRight =
      windowWidth - selectionCoordinates.x < toolbarMeasures.w / 2
    const hiddenLeft = selectionCoordinates.x < toolbarMeasures.w / 2

    const normalX =
      selectionCoordinates.x - toolbarMeasures.w / 2 + selectionMeasures.w / 2
    const normalY = selectionCoordinates.y - toolbarMeasures.h

    const invertedY = selectionCoordinates.y + selectionMeasures.h
    const moveXToLeft = windowWidth - toolbarMeasures.w
    const moveXToRight = 0

    coordinates = {
      x: normalX,
      y: normalY,
    }

    if (hiddenTop) {
      coordinates.y = invertedY
    }

    if (hiddenRight) {
      coordinates.x = moveXToLeft
    }

    if (hiddenLeft) {
      coordinates.x = moveXToRight
    }

    this.setState({
      toolbarCoordinates: coordinates,
    })
  }

  handleKeyCommand = (command) => {
    const { editorState } = this.state
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return true
    }
    return false
  }

  toggleToolbar = (inlineStyle) => {
    this.onChange(
      RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle)
    )
  }
  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: { "form-name": "story", ...this.getPlainText(state) }
    })
      .then(() => {
        alert("Success!");
         console.log(this.getPlainText(state))}
         )
      .catch(error => alert(error));

    e.preventDefault();
  };

  
  render() {
    
    const { editorState } = this.state
    // Make sure we're not on the ssr
    if (typeof window !== 'undefined') {
      // Let's stick the toolbar to the selection
      // when the window is resized
      window.addEventListener('resize', this.checkSelectedText)
    }

    

    const toolbarStyle = {
      display: this.state.showToolbar ? 'block' : 'none',
      backgroundColor: 'white',
      border: '2px solid',
      color: '#333',
      position: 'absolute',
      left: this.state.toolbarCoordinates.x,
      top: this.state.toolbarCoordinates.y,
      zIndex: 999,
      padding: 10,
    }







  
      /* Here’s the juicy bit for posting the form submission */
  




const {message} = this.state;
    
    return (
     
      <div className={styles.notepad}>
           <form name="story" data-netlify="true" netlify-honeypot="bot-field" hidden>
      <textarea name="message"></textarea>
    </form>
        <form name="story" onSubmit={this.handleSubmit}>
        <div
        
          ref={(elem) => {
            this.elemWidth = elem ? elem.clientWidth : 0
            this.elemHeight = elem ? elem.clientHeight : 0
          }}
          style={toolbarStyle}
        >
          <ToolBar editorState={editorState} onToggle={this.toggleToolbar} />
        </div>
        <div id="text" onClick={this.onClickEditor} onBlur={this.checkSelectedText} name="message" value={message}>
          <Editor
          
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            placeholder="Start your story..."
            editorKey="foobar"
            spellCheck={true}
            ref={(element) => {
              this.editor = element
            }}
            
          />
        </div>
        <div style={{ marginTop: 40 }}>
        <button
             className={styles.cta} type="submit">
             Tell your tale...
          </button>
        </div>
        </form>
      </div>
    )
  }
}

// Custom overrides for each style
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 4,
  },
  BOLD: {
    color: '#333',
    fontWeight: 'bold',
  },
  ANYCUSTOMSTYLE: {
    color: '#00e400',
  },
}

class ToolbarButton extends Component {
  constructor() {
    super()
    this.onToggle = (e) => {
      e.preventDefault()
      this.props.onToggle(this.props.style)
    }
  }

  render() {
    const buttonStyle = {
      padding: 10,
    }
    return (
      <span onMouseDown={this.onToggle} style={buttonStyle}>
        {this.props.label}
      </span>
    )
  }
}

var toolbarItems = [
  { label: 'Bold', style: 'BOLD' },
  { label: 'Italic', style: 'ITALIC' },
  { label: 'Underline', style: 'UNDERLINE' },
  { label: 'Code', style: 'CODE' },
  { label: 'Strikethrough', style: 'STRIKETHROUGH'},
]

const ToolBar = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle()
  return (
    <div>
      {toolbarItems.map((toolbarItem) => (
        <ToolbarButton
          key={toolbarItem.label}
          active={currentStyle.has(toolbarItem.style)}
          label={toolbarItem.label}
          onToggle={props.onToggle}
          style={toolbarItem.style}
        />
      ))}
    </div>
  )
}

const initialData = {
  blocks: [
    {
      key: '16d0k',
      text: 'You can edit this text.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [{ offset: 0, length: 23, style: 'BOLD' }],
      entityRanges: [],
      data: {},
    },
    {
      key: '98peq',
      text: '',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: 'ecmnc',
      text:
        'Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi, has been destroyed.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [
        { offset: 0, length: 14, style: 'BOLD' },
        { offset: 133, length: 9, style: 'BOLD' },
      ],
      entityRanges: [],
      data: {},
    },
    {
      key: 'fe2gn',
      text: '',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: '4481k',
      text:
        'With the support of the REPUBLIC, General Leia Organa leads a brave RESISTANCE. She is desperate to find her brother Luke and gain his help in restoring peace and justice to the galaxy.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [
        { offset: 34, length: 19, style: 'BOLD' },
        { offset: 117, length: 4, style: 'BOLD' },
        { offset: 68, length: 10, style: 'ANYCUSTOMSTYLE' },
      ],
      entityRanges: [],
      data: {},
    },
  ],
  entityMap: {},
}
// export default function Notepad() {
// // 	


// 	// constructor(props) {
// 	// 	super(props);
// 	// 	this.state = {value: ''};
// 	// 	this.handleChange = this.handleChange.bind(this);
// 	// 	this.handleSubmit = this.handleSubmit.bind(this);
// 	//   }
	
// 	//   handleChange(event) {    this.setState({value: event.target.value});  }
// 	//   handleSubmit(event) {
// 	// 	alert('A name was submitted: ' + this.state.value);
// 	// 	event.preventDefault();
// 	//   }

// 	const downloadFile = async event => {
// 		event.preventDefault()
	
// 		const res = await fetch('/api/register', {
// 		  body: JSON.stringify({
// 			name: event.target.story.value
// 		  }),
// 		  headers: {
// 			'Content-Type': 'application/json'
// 		  },
// 		  method: 'POST'
// 		})
	
// 		const result = await res.json()
// 		// result.user => 'Ada Lovelace'


// 		var element = document.createElement('a');
// 	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text + `
  
//   Contact us at fables@storytale.design`));
// 	element.setAttribute('download', filename);
  
// 	element.style.display = 'none';
// 	document.body.appendChild(element);
  
// 	element.click();
  
// 	document.body.removeChild(element);

// // 	Notepad('your-storytale.txt', this['text'].value)
// 	  }
	  
// 	return (
// 		<>
// 		<form onSubmit={downloadFile}>
// 		<div contentEditable name="story">Tell your Story...|</div>
// 		<button type="submit">Write your own story</button>
// 		</form>
// 		</>
// 	// 	<>
// 	// 	<form onSubmit={this.handleSubmit}>
// 	// 		<textarea rows={1} cols={25} name="text" placeholder="Tell your Story...|" value={this.state.value} onChange={this.handlechange}>
// 	// 			</textarea> 
// 	// 		<button type="submit" value="Submit">Download your Story</button>
//   	// 	</form>
// 	// 	  </>
// 	)
//   }