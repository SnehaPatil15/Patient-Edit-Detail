import './App.css';

function App() {

  var handleSubmit = () => { };

  return (
    <main className='App'>
      <section>
        <form action="" onSubmit={handleSubmit}>

          <section className='Personal__info'>
            <h1>Personal Information </h1>
            <div className='input_field'>
              <label htmlFor="">Patient Name</label>
              <input type="text" />
            </div>

            <div className='input_field'>
              <label htmlFor="">Address</label>
              <input type="text" />
            </div>

            <div className='input_field'>
              <label htmlFor="">Contact Number</label>
              <input type="text" />
            </div>

            <div className='input_field'>
              <label htmlFor="">Age</label>
              <input type="text" />
            </div>


            <div className='input_field'>
              <label htmlFor="">Blood Group</label>
              <input type="text" />
            </div>

            <div className='input_field'>
              <label htmlFor="">gender</label>

              <div className='radio_btn'>
                <input type="radio" value="male" id="male" name="gender" />
                <label for="male">Male</label>

                <input type="radio" value="female" id="female" name="gender" />
                <label for="male">female</label>
              </div>

            </div>

          </section>

          <section className='Medical_info'>

            <h1>Medical Information </h1>
            <div className='input_field'>
              <label htmlFor="">Any Major Disease</label>
              <input type="text" />
            </div>

            <div className='input_field'>
              <label htmlFor="">Symptoms</label>
              <input type="text" />
            </div>

            <div className='input_field'>
              <label htmlFor="">Diagnosis</label>
              <input type="text" />
            </div>

            <div className='input_field'>
              <label htmlFor="">Medicine</label>
              <input type="text" />
            </div>

            <div className='input_field'>
              <label htmlFor="">Ward Requirement</label>
              <input type="text" />
            </div>

          </section>

          <div className='input_field'>
            <label htmlFor="">Type of Ward</label>
            <input type="text" />
          </div>

          <button type="submit" className='submit_btn'>Submit</button>

        </form>

      </section>
    </main>
  );
}

export default App;
