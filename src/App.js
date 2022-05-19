import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react'


function App() {

  const [pid, setPid] = useState();
  const [patientDetailsArray, setPateintDetailsArray] = useState([])
  const [pateintDetails, setPateintDetails] = useState()

  ////////////////////////////////////////////
  const [name, setName] = useState("")

  const [address, setAddress] = useState("")

  const [bGroup, setBGroup] = useState('')

  const [contact, setContact] = useState('')

  const [gender, setGender] = useState('')

  const [age, setAge] = useState('')

  const [majorDiseases, setMajorDiseases] = useState('')


  useEffect(() => {
    const fetchData = async () => {

      try {
        const { data: response } = await axios.get("http://localhost:7557/api/PatientDetails");
        setPid(response[0]);

        const fetchData2 = async () => {
          try {
            const { data: response2 } = await axios.get("http://localhost:7557/api/AddPatient");
            setPateintDetails(response2[response[0].pid]);
            setName(response2[response[0].pid].Name)
            setAddress(response2[response[0].pid].Full_Address)
            setBGroup(response2[response[0].pid].Blood_Group)
            setContact(response2[response[0].pid].Contact)
            setGender(response2[response[0].pid].Gender)
            setMajorDiseases(response2[response[0].pid].Major_Disease)
            setAge(response2[response[0].pid].Age)

            //console.log(response[0])
            // filterArray2();
          } catch (error) {
            console.error(error.message);
          }
        }
        fetchData2();

      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);

  console.log(bGroup);
  console.log(address);
  console.log(contact);
  console.log(majorDiseases);
  console.log(gender);


  function handleSubmit() { }

  return (
    <main className='App'>
      <section>
        <form action="" onSubmit={handleSubmit}>

          <section className='Personal__info'>
            <h1>Personal Information </h1>
            <div className='input_field'>
              <label>Patient Name</label>
              <input type="text"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
              />
            </div>

            <div className='input_field'>
              <label htmlFor="address">Address</label>
              <input type="text"
                value={address}
                onChange={(e) => { setAddress(e.target.value) }}
              />
            </div>

            <div className='input_field'>
              <label >Contact Number</label>
              <input type="text"
                value={contact}
                onChange={(e) => { setContact(e.target.value) }}
              />
            </div>

            <div className='input_field'>
              <label >Age</label>
              <input type="text"
                value={age}
                onChange={(e) => { setAge(e.target.value) }}
              />
            </div>


            <div className='input_field'>
              <label >Blood Group</label>
              <input type="text"
                value={bGroup}
                onChange={(e) => { setBGroup(e.target.value) }}
              />
            </div>

            <div className='input_field'>
              <label>gender</label>

              <div className='radio_btn'>
                <input type="radio" value="male" id="male" name="gender" />
                <label for="male">Male</label>

                <input type="radio" value="female" id="female" name="gender" />
                <label for="male">female</label>
              </div>

            </div>

            <div className='input_field'>
              <label>Any Major Disease</label>
              <input type="text"
                value={majorDiseases}
                onChange={(e) => { setMajorDiseases(e.target.value) }} />
            </div>

          </section>


          <button type="submit" className='submit_btn'>Submit</button>

        </form>

      </section>
    </main>
  );
}

export default App;
