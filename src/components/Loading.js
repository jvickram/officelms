import React from 'react';

export const Loading = () => {
    return(
        <span className="col-12">
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Loading . . .</p>
        </span>
    );
}