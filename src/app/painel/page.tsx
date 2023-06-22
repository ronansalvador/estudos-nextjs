import Header3 from '../components/Header3';

function page() {
  return (
    <>
      <Header3 />
      <main className='bg-red-400 flex flex-col items-center justify-center h-full'>
        <h1>Painel</h1>
        <h2>teste</h2>
        <p className='text-justify p-10'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </main>
    </>
  );
}

export default page;
