import React, { useState } from "react";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<string>("");

    function useAttempt() {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    }

    function gainAttempts() {
        const amount = parseInt(requests);
        if(!isNaN(amount) && amount > 0) setAttempts(attempts + amount);
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <h4>Attemps Left: {attempts}</h4>
            <FormGroup controlId="attempts">
                <FormLabel>Request Attempts:</FormLabel>
                <FormControl 
                type="number"
                value={requests}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setRequests(event.target.value);}}
                ></FormControl>
            </FormGroup>
            <Button onClick={gainAttempts}>gain</Button>
            <Button onClick={useAttempt} disabled={attempts <= 0}>use</Button>
        </div>
    );
}
