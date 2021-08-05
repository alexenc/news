import React from 'react';
import { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

    const [state, setState] = useState('')

    const SelectNews = () => (
        <select
            className="browser-default"

        >
            <option value="Select">select category</option>
        </select>
    )
    return[state, SelectNews]
}
 
export default useSelect;