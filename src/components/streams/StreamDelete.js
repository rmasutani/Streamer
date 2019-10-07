import React from "react";
import Modal from "../../Modal";
import history from "../../history";

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui primary button">Delete</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        //If you want to pass in some actions rather than string, define it above first!
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

export default StreamDelete;
