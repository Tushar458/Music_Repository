import React from 'react';

const SearchBox=({searchfield,searchChange}) => {
	return (
		<div className='tc pa2' >
		<input
		 className='tc pa3 ba b--green bg-white'

		type='search' placeholder='search song'
		onChange={searchChange}
		/> 
		
		</div>
		);
}

export default SearchBox;
