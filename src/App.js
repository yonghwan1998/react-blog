/* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {

	let post = '강남 우동 맛집';
	let [글제목, b] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
	let [따봉, 따봉변경] = useState(0);
	
	function 함수() {
		console.log(1);
	}
	
	return (
		<div className="App">
			<div className="black-nav">
				<h4>ReactBlog</h4>
			</div>
			<div className='list'>
				<input
					type='button'
					value='button'
					onClick={() => {
						let newName = [...글제목];
						newName[0] = '여자 코트 추천';
						b(newName);
					}}
				/>
				<h4>
					{글제목[0]}&nbsp;
					<span onClick={() => {
						따봉변경(따봉 + 1);
					}}>
					👍&nbsp;
					</span> 
				{따봉}&nbsp;
				</h4>
				<p>contents</p>
			</div>
			<div className='list'>
				<h4>{글제목[1]}</h4>
				<p>contents</p>
			</div>
			<div className='list'>
				<h4>{글제목[2]}</h4>
				<p>contents</p>
			</div>
		</div>
	);
}

export default App;
