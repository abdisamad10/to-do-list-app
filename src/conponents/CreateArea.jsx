import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab} from "@mui/material";

function CreateArea (props) {

    const [isExpended, setExpended] = useState(false);

    const [note, setNote] = useState({
       title: "",
       content: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                    [name] : value
            };
        });
    }

    function submitNote (event){
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    function expend (){
        setExpended(true);
    }
    return (
        <div >
            <form className="create-note">
                {isExpended && (
                      <input 
                      type="text"
                      name="title"
                      onChange={handleChange}
                      value={note.title}
                      placeholder="Title"
      
                  />
                )}
          
            <textarea 
                    name="content" 
                    rows={isExpended ? 3 : 1}
                    onClick={expend}
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    />
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                   
                    </form>
        </div>
    )
}

export default CreateArea;