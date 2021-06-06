import React from 'react';

import Blobs from 'svg/Blobs.svg'
import Circles from 'svg/Circles.svg';
import Triangles from 'svg/Triangles.svg';

export default () => (
    <div>
        <Circles className="circles" />
        <Blobs className=" w-100 h-100 waves" />
        <Triangles className='w-100 triangles' />                
    </div>
);