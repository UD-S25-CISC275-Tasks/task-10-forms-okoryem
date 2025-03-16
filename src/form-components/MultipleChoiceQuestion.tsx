import React, { useState } from "react";
import { FormGroup, FormLabel, FormSelect } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <FormGroup controlId="multipleChoice">
                <FormLabel>Select an answer</FormLabel>
                <FormSelect value={choice} onChange={updateChoice}>
                    {options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </FormSelect>
            </FormGroup>
            <h4>{choice === expectedAnswer ? "✔️" : "❌"}</h4>
        </div>
    );
}
