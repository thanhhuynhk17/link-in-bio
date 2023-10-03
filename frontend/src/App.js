import { Card } from 'flowbite-react';

function App() {
	return (
		<div className="w-screen max-w-lg">
			<Card
				horizontal
				rev={true}
				imgSrc="https://picsum.photos/200/300"
				className='flex-row-reverse	'
			>
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					<p>Noteworthy technology acquisitions 2021
					</p>
				</h5>
			</Card>
		</div>
	);
}

export default App;
