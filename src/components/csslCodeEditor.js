export default () => {
  let codeEditor = ace.edit("aceCss")

  // Configure ace
  let editorLib = {
    init() {
      // set theme
      codeEditor.setTheme("ace/theme/dracula")

      // set language mode
      codeEditor.session.setMode("ace/mode/css")

      // set options
      codeEditor.setOptions({
        fontFamily: "Victor mono",
        fontSize: "10pt",
        highlightActiveLine: true,
        highlightSelectedWord: true,
        cursorStyle: "smooth",
        behavioursEnabled: true,
        wrapBehavioursEnabled: true,
        autoScrollEditorIntoView: true,
        copyWithEmptySelection: true,
        useSoftTabs: true,
        navigateWithinSoftTabs: true,
        enableMultiselect: true,
        enableEmmet: true,
        wrap: true,
        showPrintMargin: false,
        showFoldWidgets: true,
        fadeFoldWidgets: true,
        showGutter: true,
        scrollPastEnd: true,
        newLineMode: "auto",
        useWorker: true,
        tabSize: 3,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        useElasticTabstops: true,
        highlightGutterLine: true,
      })
    },
  }

  editorLib.init()
}
