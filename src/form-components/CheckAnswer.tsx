import React, { useState } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateUserAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }
    return (
        <div>
            <FormGroup controlId="formUserAnswer">
                <FormLabel>Answer:</FormLabel>
                <FormControl
                    value={userAnswer}
                    onChange={updateUserAnswer}
                ></FormControl>
            </FormGroup>
            <h3>
                {(
                    userAnswer.trim().toLowerCase() ===
                    expectedAnswer.toLowerCase()
                ) ?
                    "✔️"
                :   "❌"}
            </h3>
        </div>
    );
}
