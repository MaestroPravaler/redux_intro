import React from "react";

import Card from "./Card";

export default (props) => {
    // const min = props.min;
    // const max = props.max;

    // outra maneira
    const {min, max} = props;
    return (
        <Card title="Soma dos Números" green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{min + max}</strong>
                </span>
            </div>
        </Card>
    );
};
