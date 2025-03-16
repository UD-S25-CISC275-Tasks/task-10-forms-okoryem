import React, { useState } from "react";
import { FormGroup, FormLabel, FormCheck, FormControl } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateStudentStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <FormCheck
                type="switch"
                id="editMode"
                label=" Edit Mode"
                checked={editMode}
                onChange={updateEditMode}
            ></FormCheck>
            {editMode ? (
            <FormGroup>
                <FormLabel>Name:</FormLabel>
                <FormControl
                    type="text"
                    value={name}
                    onChange={updateName}
                ></FormControl>
                <FormCheck
                    type="checkbox"
                    id="studentCheck"
                    label="Student"
                    checked={isStudent}
                    onChange={updateStudentStatus}
                ></FormCheck>
            </FormGroup>
            ) 
            : (<h4>{name} {isStudent ? "is a student" : "is not a student"}</h4>)}
        </div>
    );
}
