import { connect } from "react-redux";

import { setEditor } from "modules/editor/actions";

// Components
import EditorComponent from "./component";

export default connect(
  state => ({
    editor: state.editor
  }),
  dispatch => {
    return {
      dispatch,
      setEditor: data => dispatch(setEditor(data))
    };
  }
)(EditorComponent);
