import Header from './components/Header'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <main className='py-6 w-2/3 m-auto mt-6'>
        <div>
          <h1 className='py-1 font-bold text-4xl uppercase bg-gradient-to-r from-purple-500 to-pink-500 inline-block text-transparent bg-clip-text'>Descrubi tu estilo único</h1>
          <h2 className='font-medium text-lg'>Donde la moda se encuentra con la individualidad!</h2>
          <button className='mt-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-700 hover:to-pink-500 duration-500 border-2 border-zinc-300 py-1 px-12 rounded'><a className='text-lg font-medium text-white' href="">Ver más!</a></button>
        </div>
      
        <div className='mt-32 flex gap-12'>
          <Cards name="Buzo Nike" desc="Black Jersy" discount="20%" price="60.000" image="/clothe/nike.jpg" />
          <Cards name="Remera Nike" desc="LA Newton" discount="20%" price="45.000" image="/clothe/nike2.webp" />
          <Cards name="PSG Retro" desc="Gray Edition" discount="20%" price="70.000" image="/clothe/nike3.webp" />
        </div>
        <div className='mt-20 flex gap-12'>
          <Cards name="Buzo Nike" desc="Black Jersy" discount="20%" price="60.000" image="/clothe/nike.jpg" />
          <Cards name="Remera Nike" desc="LA Newton" discount="20%" price="45.000" image="/clothe/nike2.webp" />
          <Cards name="PSG Retro" desc="Gray Edition" discount="20%" price="70.000" image="/clothe/nike3.webp" />
        </div>
      </main>
      
      <Footer />
    </>
  )
}

export default App
