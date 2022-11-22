import Layout from '../common/Layout';
import { useEffect, useRef, useState } from 'react';

function Location() {
	const subtitle = {
		title: 'Contact support',
		p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam voluptates pariatur quam cumque aspernatur ad consectetur nostrum voluptate reiciendis repellat.',
	};
	const { kakao } = window;
	const info = [
		{
			name: 'Blue Bottle Coffee Seongsu',
			latlng: new kakao.maps.LatLng(37.5480189, 127.0457761),
			address: '7 Achasan-ro, Seongdong-gu, Seoul',

			imgUrl: process.env.PUBLIC_URL + '/img/marker.png',
			imgSize: new kakao.maps.Size(50, 50),
			imgPos: { offset: new kakao.maps.Point(36, 60) },
		},
		{
			name: 'Blue Bottle Coffee Jeju',
			latlng: new kakao.maps.LatLng(33.4331403, 126.7507587),
			address: 'Jeju-do, Jeju-si, Gujwa-eup, Beonyeong-ro 2133-30',
			imgUrl: `${process.env.PUBLIC_URL}/img/marker.png`,
			imgSize: new kakao.maps.Size(50, 50),
			imgPos: { offset: new kakao.maps.Point(13, 70) },
		},
	];

	const container = useRef(null);
	const [Location, setLocation] = useState(null);
	const [Traffic, setTraffic] = useState(false);
	const [Info] = useState(info);
	const [Index, setIndex] = useState(0);

	const option = {
		center: Info[Index].latlng,
		level: 3,
	};

	const imgSrc = Info[Index].imgUrl;
	const imgSize = Info[Index].imgSize;
	const imgPos = Info[Index].imgPos;

	const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPos);

	const marker = new kakao.maps.Marker({
		position: option.center,
		image: markerImage,
	});

	useEffect(() => {
		//Index스테이트가 변경될때마다 일단은 기존 map프레임안쪽의 기존 지도를 제거해서 초기화
		container.current.innerHTML = '';
		const map_instance = new kakao.maps.Map(container.current, option);
		marker.setMap(map_instance);
		setLocation(map_instance);

		// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
		const mapTypeControl = new kakao.maps.MapTypeControl();

		// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
		// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
		map_instance.addControl(
			mapTypeControl,
			kakao.maps.ControlPosition.BOTTOMLEFT
		);

		// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
		const zoomControl = new kakao.maps.ZoomControl();
		map_instance.addControl(zoomControl, kakao.maps.ControlPosition.LEFT);

		const handleResize = () => {
			console.log('지도위치 가운데로 갱신');
			map_instance.setCenter(Info[Index].latlng);
		};

		//컴포넌트 마운트시 window전역객체에 리사이즈 이벤트 연결
		window.addEventListener('resize', handleResize);

		//해당 컴포넌트가 unmount시 window전역객체에서 핸들러함수 제거
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [Index]);

	return (
		<Layout name={'Location'} sub={subtitle}>
			<div id='map' ref={container}></div>

			<section>
				<ul className='branch'>
					{info.map((info, idx) => {
						let on = '';
						Index === idx && (on = 'on');
						return (
							<li key={idx}>
								<p>{info.name}</p>
								<p>{info.address}</p>
								<button onClick={() => setIndex(idx)} className={on}>
									지도
								</button>
							</li>
						);
					})}
				</ul>
			</section>
		</Layout>
	);
}

export default Location;
