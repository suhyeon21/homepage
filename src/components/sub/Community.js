import Layout from '../common/Layout';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';

function Community() {
	const subtitle = {
		title: 'Our Community',
		p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptas ut dolores quidem mollitia id nemo eius sequi sint repudiandae.',
	};

	const inputTitle = useRef(null);
	const inputContent = useRef(null);
	const titleEdit = useRef(null);
	const contentEdit = useRef(null);
	const [Posts, setPosts] = useState([]);
	const [Edit, setEdit] = useState(true);

	const resetForm = () => {
		inputTitle.current.value = '';
		inputContent.current.value = '';
	};

	const showForm = () => {
		if (
			!inputTitle.current.value.trim() ||
			!inputContent.current.value.trim()
		) {
			return alert('내용을 입력하세요');
		}

		setPosts([
			{ title: inputTitle.current.value, content: inputContent.current.value },
			...Posts,
		]);

		resetForm();
	};

	const deletePost = (i) => {
		const newPosts = Posts.filter((_, index) => i !== index);
		setPosts(newPosts);
	};

	const editPost = (i) => {
		if (!Edit) return;
		setEdit(false);

		setPosts(
			Posts.map((post, index) => {
				if (i === index) post.edit = true;
				return post;
			})
		);
	};

	const updatePost = (i) => {
		if (!titleEdit.current.value.trim() || !contentEdit.current.value.trim()) {
			resetForm();
			return alert('수정할 제목과 본문을 모두 입력해주세요.');
		}

		Posts.map((post, index) => {
			if (i === index) {
				post.title = titleEdit.current.value;
				post.content = contentEdit.current.value;
				post.edit = false;
			}
			return post;
		});
		setEdit(true);
	};

	const cancelPost = (i) => {
		setEdit(true);

		setPosts(
			Posts.map((post, index) => {
				if (i === index) post.edit = false;
				return post;
			})
		);
	};

	return (
		<Layout name='community' sub={subtitle}>
			<div className='board-input'>
				<div className='board-input-top'>
					<div className='title'>
						<h1>
							Send <br />
							comments
						</h1>
					</div>
				</div>
				<div className='input-list'>
					<div className='input-item'>
						<input
							type='text'
							placeholder='title'
							name='Title'
							ref={inputTitle}
						/>
						<textarea
							name='content'
							placeholder='Content'
							ref={inputContent}></textarea>
					</div>
				</div>

				<div className='btns-community-input'>
					<button type='button' onClick={resetForm}>
						Cancel
					</button>
					<button type='button' onClick={showForm}>
						Registration
					</button>
				</div>
			</div>

			<div className='board-ouput'>
				<ul className='board-list'>
					{Posts.map((post, i) => {
						return (
							<li className='board-item' key={i}>
								{post.edit ? (
									<div className='input-edit-list'>
										<input
											type='text'
											placeholder='title'
											name='Title'
											ref={titleEdit}
											defaultValue={post.title}
										/>
										<textarea
											name='content'
											placeholder='Content'
											ref={contentEdit}
											defaultValue={post.content}></textarea>

										<div className='btns-edit'>
											<button
												type='button'
												onClick={() => {
													cancelPost(i);
												}}>
												<FontAwesomeIcon icon={faXmarkSquare}></FontAwesomeIcon>
											</button>
											<button
												type='button'
												onClick={() => {
													updatePost(i);
												}}>
												<FontAwesomeIcon icon={faSquareCheck}></FontAwesomeIcon>
											</button>
										</div>
									</div>
								) : (
									<>
										<h2>{post.title}</h2>
										<p>{post.content}</p>

										<div className='btns-community-ouput'>
											<button
												type='button'
												onClick={() => {
													editPost(i);
												}}>
												<FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
											</button>
											<button
												type='button'
												onClick={() => {
													deletePost(i);
												}}>
												<FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
											</button>
										</div>
									</>
								)}
							</li>
						);
					})}
				</ul>
			</div>
		</Layout>
	);
}

export default Community;
