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
			<button
				onClick={() => {
					let newArray = [...글제목];
					newArray.sort();
					b(newArray);
				}}
			>
			가나다순정렬
			</button>
			<button
				onClick={() => {
					let newName = [...글제목];
					newName[0] = '여자 코트 추천';
					b(newName);
				}}
			>
			글수정
			</button>
			<div className='list'>
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
			<Modal></Modal>
		</div>
	);
}

function Modal() {
	return (
		<div className='modal'>
			<h4>제목</h4>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	);
}

export default App;
