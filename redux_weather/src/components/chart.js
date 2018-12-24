import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
export default (props) => {
    return (
        <div>
            <Sparklines height={20} width={100} data={props.data} margin={5}>
                <SparklinesLine color={props.color} />
            </Sparklines>
        </div>
    )
}