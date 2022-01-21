const { selection } = require("scenegraph");
const { Text } = require("scenegraph");
const { alert } = require("./dialogs.js")

const uiHTML = `
<style>


/* Buttons styling */

.buttons-list {
  text-align: center;
}

.button-group {
  text-align: center;
  padding: 4% 0;
  margin: 2% 0;
  border: 1px solid #FCFCFC;
  border-radius: 5px;
  background-color: #FCFCFC;
}

.button-group-label {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 300;
  color: #1e96e6;
  font-size: 0.9rem;
  margin: 1.5% 0%;
}

.buttons {
  text-align: center;
  margin: 0%;
  width: 100%;

}

.button-dropdown-combo{
  text-align: left;
  padding-left: 3.7%;
  margin: 0%; 
  width: 100%;
}

.button {
  cursor: pointer;
  width: 90%;
  font-weight: 400;
  font-size: 0.75rem;
  padding-top: 1%;
  padding-bottom: 1%;
  margin-top: 1%;
  margin-bottom: 1%;
  border: 1px solid #777777;
  cursor: pointer;
}


.dropdown-label{
  display: inline-block;
  vertical-align: middle;
}

.dropdown-main {
  vertical-align: middle;
  width: 90%;
}

.dropdown-item {
  font-size: 0.75rem;
  height: 16%;
  padding: 1% 1%;
  color: #6f6f70;
  text-align: center;
}

.note-text{
    padding: 4% 0;
    font-size: 0.8rem;
}

</style>


<p class="note-text">Select text layers on your canvas and add data</p>

<div class="buttons-list">
    <div class="button-group">
    <p class="button-group-label">User details</p>
    <div class="buttons">
        <sp-action-group emphasized id="standard-selected">
            <sp-action-button emphasized selected class="button" id="FirstName">First Name</sp-action-button>
            <sp-action-button emphasized selected class="button" id="LastName">Last Name</sp-action-button>
            <sp-action-button emphasized selected class="button" id="FullName">Full Name</sp-action-button>
            <sp-action-button emphasized selected class="button" id="DoB">Date of Birth</sp-action-button>
            <sp-action-button emphasized selected class="button" id="Age">Age</sp-action-button>
            <sp-action-button emphasized selected class="button" id="Email">Email</sp-action-button>
            <sp-action-button emphasized selected class="button" id="Mobile">Mobile Number</sp-action-button>
        </sp-action-group>
    </div>
    </div>

    <div class="button-group">
    <p class="button-group-label">User profession</p>

        <select class="dropdown-main" id="profession-domain" name="" label="Select domain">
        <option id="ran" class="dropdown-item" value="Random" selected>Random</option>
        <option id="tech" class="dropdown-item" value="Tech and IT">Tech and IT</option>
        <option id="eng" class="dropdown-item" value="Engineering">Engineering</option>
        <option id="man" class="dropdown-item" value="Management">Management</option>
        <option id="heal" class="dropdown-item" value="Healthcare">Healthcare</option>
        <option id="fin" class="dropdown-item" value="Finance">Finance</option>
        <option id="sci" class="dropdown-item" value="Science">Science</option>
        <option id="ed" class="dropdown-item" value="Education">Education</option>
        <option id="art" class="dropdown-item" value="Art and media">Art and media</option>
        <option id="hos" class="dropdown-item" value="Hospitality">Hospitality</option>
        <option id="con" class="dropdown-item" value="Construction">Construction</option>
        <option id="gov" class="dropdown-item" value="Govt and administration">Govt and admin</option>
        <option id="vol" class="dropdown-item" value="Volunteering">Volunteering</option>
        <option id="oth" class="dropdown-item" value="Other">Others</option>
        </select>

        <sp-action-button emphasized selected class="button" id="Prof">Add profession</sp-action-button>
    </div>


    <div class="button-group">
        <p class="button-group-label">Location details</p>
        <div class="buttons">
        <sp-action-group emphasized id="standard-selected">
            <sp-action-button emphasized selected class="button" id="RurAddress">Rural Address</sp-action-button>
            <sp-action-button emphasized selected class="button" id="UrbAddress">Urban Address</sp-action-button>
            <sp-action-button emphasized selected class="button" id="City">City</sp-action-button>
            <sp-action-button emphasized selected class="button" id="State">State</sp-action-button>
            <sp-action-button emphasized selected class="button" id="CityState">City, State (Pair)</sp-action-button>
            <sp-action-button emphasized selected class="button" id="PIN">PIN Code</sp-action-button>
        </sp-action-group>
        </div>
    </div>

    <div class="button-group">
        <p class="button-group-label">User IDs</p>
        <div class="buttons">
            <sp-action-group emphasized id="standard-selected">
                <sp-action-button emphasized selected class="button" id="Pass">Indian Passport</sp-action-button>
                <sp-action-button emphasized selected class="button" id="UID">UID (Aadhar)</sp-action-button>
                <sp-action-button emphasized selected class="button" id="PAN">PAN (Tax ID)</sp-action-button>
                <sp-action-button emphasized selected class="button" id="UPIn">UPI (name)</sp-action-button>
                <sp-action-button emphasized selected class="button" id="UPIm">UPI (mobile)</sp-action-button>
                <sp-action-button emphasized selected class="button" id="DL">Driver's License</sp-action-button>
                <sp-action-button emphasized selected class="button" id="RC">Vehicle RC</sp-action-button>
            </sp-action-group>
        </div>
    </div>

    <div class="button-group">
        <p class="button-group-label">Blockchain details</p>
        <div class="buttons">
            <sp-action-group emphasized id="standard-selected">
                <sp-action-button emphasized selected class="button" id="ETH">ETH Wallet</sp-action-button>
                <sp-action-button emphasized selected class="button" id="ENS">ENS Domain</sp-action-button>
                <sp-action-button emphasized selected class="button" id="BTC">BTC Wallet</sp-action-button>
            </sp-action-group>
        </div>
    </div>

</div>

 <p class="note-text">Disclaimer: This plugin generates sample user data. Any resemblance to real world entities are purely coincidental.</p>

 <div>
    <p style="text-align: center;"><a href="https://twitter.com/abhichirde" target="_blank">Like ❤️</p> 
 </div>



`;

const dataSet = {

    "FirstName" : ["Nilanjana", "Sikata", "May", "Hardini", "Yaditasri", "Srividya", "Shirohini", "Rajathi", "Puravi", "Shritha", "Subhangi", "Pratichi", "Abja", "Ucchal", "Theertha", "Janya", "Daevayaani", "Devasena", "Rusham", "Falguni", "Neera", "Obilesh", "Toyakshi", "Ninarika", "Seethalakshmi", "Ponni", "Vibusha", "Iksha", "Druthy", "Dakshita", "Tejshri", "Altthea", "Athidi", "Sikta", "Aapal", "Prarthana", "Ujjwal", "Bhayva", "Samprathi", "Pranshu", "Aayaushi", "Brahmini", "Inimoli", "Suprasanna", "Saija", "Chinnu", "Soukhya", "Perarasi", "Tharunika", "Nihira", "Vanmalli", "Bahugandha", "Indra", "Radhiyaa", "Bhuvaneswari", "Tarpana", "Shree", "Nilima", "Milika", "Siksha", "Velvili", "Ojaswini", "Srivathsavi", "Idhaya", "Althea", "Athalia", "Darsha", "Agampreet", "Sahira","Nelochan", "Rikin", "Rukm", "Bhoomindra", "Nandlaal", "Devasree", "Jivana", "Satesh", "Advin", "Ranesh", "Abhijay", "Sarat", "Abijah", "Kala", "Vedatman", "Adnan", "Kahini", "Vidyut", "Taneesh", "Gandhar", "Apuroop", "Kushal", "Ehsaas", "Ruchita", "Divyansh", "Sragvibhushan", "Pardhu", "Atmaja", "Karunamaya", "Naumika", "Ekram", "Murari", "Bala Gopal", "Krthik", "Varaahamihir", "Pushpaj", "Vasusen", "Kailashpati", "Bisaj", "Shiya", "Ajani", "Krishnabala", "Sudarshan", "Aadhil", "Srujana", "Varshit", "Satvik", "Veerendra", "Yathavan", "Lokajit", "Neil", "Gadhadhar", "Vaaman", "Mitransh", "Saroj", "Dinesh", "Chinmayee", "Trinetra", "Sutapa", "Bhavbhooti", "Mahaaveer", "Hemal", "Suvarn", "Kshamakaram", "Talin", "Shatrughan", "Kalicharan", "Amitesh", "Ananya", "Banke","Aakaar", "Anjaneya", "Aatreya", "Advith", "Balan", "Biju", "Bhavyesh", "Chandresh", "Chathresh", "Chiranjeev", "Devarya", "Dhruvan", "Drishith", "Eegaiarasu", "Ekachakra", "Elango", "Elavarasan", "Elisaiyan", "Elilvendan", "Gnanam", "Gunasekaran", "Ilaiyaraja", "Ilakkiyan", "Ilamaran", "Ilanthirayan", "Irumporai", "Jaganath", "Jagath", "Jaithra", "Jegathiswaran", "Jivathran", "Karthav", "Karthik", "Karthikeyan", "Lohith", "Loshith", "Maniraj", "Maaran", "Manikandan", "Martanda", "Matanga", "Maharth", "Mallesh", "Nagulan", "Nallasivan", "Nagarajan", "Nikith", "Nilan", "Nithin", "Nageshwaran", "Oppilan", "Paraman", "Pavalan", "Rameshwar", "Revanth", "Rajanikanta", "Samath", "Sarvanavel", "Saswin", "Senthil", "Thillaivanan", "Thangaraj", "Thirugnanam", "Thevan", "Thirumal", "Trinath", "Ulagan", "Ulagarasan", "Vaidyanathan", "Aadita", "Aakshi", "Abhitha", "Alagi", "Amala", "Arasi", "Bhavi", "Bhrithi", "Chaithra", "Charvitha", "Charusila", "Chinnamani", "Devasree", "Devadarshini", "Dhariyithri", "Dhruvika", "Dharnitha", "Divyasree", "Drithi", "Ektha", "Eelampirai", "Eesvari", "Ekaparnika", "Elavarasi", "Elili", "Eshwaritha", "Gathika", "Gayanthika", "Geethanvitha", "Gomathi", "Gunamaalai", "Gnanavalli", "Gunamalar", "Gunasundari", "Haarathi", "Hanshitha", "Harishini", "Hamsavahini", "Idhithri", "Idhaya", "Inimai", "Ilavalagi", "Kalaiarasi", "Kanayali", "Kanimoli", "Kayalvizhi", "Lakshmika", "Lirthika", "Malaimagal", "Mangai", "Manikuntala", "Nallarasi", "Nallini", "Ojaswitha", "Olimani", "Ovya", "Pavalam", "Prajaktha", "Pranusha", "Sathya", "Shresthi", "Sethuramani", "Thanvi", "Thanya", "Thanmayi", "Tilakavati", "Tvarika", "Umamaheshwari", "Veeramagal", "Viviktha","Abhijeet", "Aditya", "Akshat", "Amanpreet", "Amitava", "Angad", "Aniruddh", "Anubhav", "Arjun", "Armaan", "Ashish", "Azad", "Bhaskar", "Bhavesh", "Bhavin", "Bipin", "Chetas", "Chirag", "Chiranjeev", "Daanish", "Dalbir", "Daljeet", "Debashish", "Debyendu", "Dhruv", "Dipankar", "Ehsaan", "Emir", "Gagandeep", "Gaurav", "Gautam", "Girish", "Gurdeep", "Harbhajan", "Himmat", "Indranuj", "Jayant", "Jayesh", "Jeet", "Jyotiraditya", "Kabir", "Kartik", "Karun", "Kshitij", "Kuwarjeet", "Lohith", "Madhav", "Mridul", "Navjot", "Nikhil", "Nimit", "Nishith", "Ojas", "Om", "Onkar", "Paramjit", "Paritosh", "Parth", "Pavan", "Pranav", "Purab", "Ramandeep", "Rehaan", "Rohan", "Sahil", "Samarth", "Samir", "Sanchit", "Sanjay", "Sarabjit", "Shahzad", "Shantanu", "Shishir", "Shray", "Siddharth", "Sparsh", "Sumer", "Surjan", "Swapan", "Tarun", "Tejas", "Tushar", "Udit", "Umang", "Varun", "Veer", "Vidur", "Vinay", "Yash", "Aaina", "Aaliyah", "Aasha", "Aditi", "Aishwarya", "Anjali", "Antara", "Aparna", "Arshpreet", "Aruna", "Arunima", "Ayesha", "Bahaar", "Bhagyashree", "Bhavna", "Bhoomi", "Bipasha", "Chaaya", "Chandrika", "Chhavi", "Chitragandha", "Deepika", "Devika", "Diya", "Ekta", "Falguni", "Garima", "Gauhar", "Gayatri", "Geetha", "Gurleen", "Harini", "Harpreet", "Indrani", "Ira", "Jasleen", "Jayanti", "Jyothsna", "Kalyani", "Kanika", "Kavya", "Laila", "Lathika", "Lavanya", "Leela", "Lopamudra", "Malavika", "Maya", "Meera", "Meher", "Naaz", "Nagma", "Nalini", "Nargis", "Nivedita", "Piya", "Pooja", "Prabhjot", "Preet", "Rangana", "Rasika", "Revati", "Ruchika", "Saira", "Sanjana", "Sarah", "Shifa", "Shivani", "Shreya", "Shridevi", "Shweta", "Simran", "Surabhi", "Tanvi", "Tara", "Uma", "Upasana", "Urvashi", "Vaishnavi", "Yamini", "Yoshita", "Aarav", "Aarush", "Aakesh", "Aabir", "Aadav", "Abhir", "Anay", "Arush", "Avik", "Anik", "Ayaan", "Bali", "Braj", "Bavyesh", "Benoy", "Bipin", "Bhawesh", "Binish", "Bivan", "Barun", "Badri", "Balraj", "Charun", "Chetan", "Charmin", "Chahel", "Chirag", "Chandrak", "Danvir", "Divit", "Darshan", "Devansh", "Devashish", "Dhairya", "Eklavya", "Ednit", "Evyavan", "Ekagrah", "Ekaant", "Evan", "Ganak", "Giriraj", "Gaurik", "Geetansh", "Girvaan", "Gupil", "Haadiya", "Hanshal", "Harman", "Havish", "Hiren", "Hriday", "Inesh", "Itish", "Idhant", "Induj", "Iravat", "Ishaan", "Jack", "Jagan", "Jiyaan", "Jeshan", "Jabir", "Jaivardhan", "Kairav", "Kiyansh", "Kavan", "Kaling", "Kaustubh", "Koshin", "Kshitij", "Keyvan", "Lochan", "Lavish", "Lavraj", "Laharish", "Lineesh", "Lohit", "Lokit", "Luvya", "Meer", "Mahant", "Mikul", "Mayur", "Milan", "Mitansh", "Manas", "Magan", "Nirvin", "Nithik", "Nayan", "Nairit", "Nabhya", "Nakshatra", "Neel", "Neelesh", "Onkar", "Omja", "Omav", "Ojayit", "Ogaan", "Parav", "Pahal", "Parth", "Pakshi", "Parijat", "Prabir", "Prayan", "Ruhan", "Ryaan", "Ridhaan", "Rovin", "Rish", "Raul", "Ritvaan", "Subin", "Sachiv", "Sadhil", "Sannith", "Sadhiv", "Saadhik", "Saahan", "Taarush", "Tanip", "Tavish", "Trishan", "Tupil", "Tapan", "Tapasvi", "Vaayu", "Viom", "Vian", "Vihaan", "Vanaj", "Vedank", "Videh", "Yaskhit", "Yaduvir", "Yukt", "Yugant", "Yojith", "Abay", "Atharv", "Aniket", "Amay", "Aryash", "Achit", "Avyan", "Aatish", "Advik", "Amey", "Aneek", "Arnav", "Anvit", "Aboil", "Adhyan", "Ashrith", "Aarsh", "Anmay", "Abhav", "Akshaj", "Ahaan", "Anvay", "Aarshin", "Ayan", "Advay", "Agrim", "Aviraj", "Ayog", "Anishk", "Aabhas", "Aadhav", "Aadhish", "Aadi", "Aadit", "Aadith", "Aaditva", "Aadvay", "Aadvik", "Aagam", "Aahaan", "Aahan", "Aahil", "Aahnik", "Aahva", "Aalam", "Aalap", "Aalekh", "Aan", "Aanav", "Aabhra", "Aangat", "Aanick", "Aapt", "Aaradhy", "Aariket", "Aarish", "Aarit", "Aariv", "Aaryav", "Aarth", "Aahna", "Aakriti", "Aadhya", "Aarohi", "Aamya", "Abhira", "Adhira", "Ambika", "Akira", "Ananya", "Anaya", "Baani", "Bhumi", "Bansuri", "Barkha", "Bhavika", "Bhavya", "Brinda", "Bipasha", "Bishti", "Bhavini", "Bhrithi", "Chaya", "Chayana", "Charil", "Chintanika", "Chaina", "Charvi", "Dhvani", "Darshana", "Daksha", "Diksha", "Dhita", "Divija", "Eshani", "Evani", "Ekaparnika", "Ekani", "Etasha", "Eksha", "Gina", "Gajal", "Gira", "Ganika", "Gayalika", "Geethika", "Hirsha", "Hrithika", "Haryka", "Harusha", "Hanika", "Harnoor", "Ihina", "Ilisha", "Inika", "Ipsa", "Iditri", "Ihitha", "Jenil", "Jhilmil", "Jigyaasa", "Jagruthi", "Jasmine", "Jeevika", "Kavisha", "Krishika", "Kairavi", "Kashika", "Keiyona", "Kanchan", "Kuvira", "Kuvam", "Liza", "Lekisha", "Lipika", "Lahari", "Lasika", "Lavali", "Lorena", "Lona", "Maitreyi", "Manasi", "Manikya", "Manika", "Malavika", "Magadhi", "Madhul", "Mayukhi", "Nivita", "Noshi", "Naila", "Nainika", "Namya", "Nyra", "Naisha", "Nartika", "Ovya", "Oditi", "Odika", "Orpita", "Oorvi", "Panvi", "Parinika", "Preshti", "Pihoo", "Punarvi", "Palomi", "Rhia", "Riti", "Rupasi", "Rajika", "Ramitha", "Ranjana", "Rijuta", "Shanvi", "Saira", "Suvi", "Sriya", "Stuthi", "Sajili", "Sahana", "Twisha", "Toshi", "Turvi", "Tapni", "Tanirika", "Tejal", "Tanvee", "Vivya", "Vachi", "Verna", "Vanhi", "Vedya", "Vaani", "Vahini", "Yashi", "Yagya", "Yahavi", "Yasti", "Yajna", "Areen", "Abhithi", "Achira", "Acira", "Amrusha", "Aditha", "Aditri", "Adrika", "Advaita", "Aboli", "Advika", "Adya", "Anuva", "Ahana", "Ahina", "Aishi", "Aishna", "Aja", "Ajia", "Akhira", "Akita", "Amani", "Aksa", "Aksha", "Akshai", "Akshi", "Akuti", "Alaina", "Aloki", "Amaya", "Amika", "Aadhira", "Aavani", "Aadanya", "Aadita", "Aadvika", "Aadya", "Aahna", "Aakarsha", "Aamani", "Aamaya", "Aanavi", "Aangi", "Aanya", "Aaoka", "Aapti", "Aara", "Aaravi", "Aarin", "Aarna", "Aarvi", "Aashika", "Aashirya", "Aashka", "Aashna", "Aashni", "Aashvi", "Aasia", "Aasmi", "Aasra", "Aasya", "Aathi", "Aayana", "Ansh", "Arhaan", "Arin", "Arjun", "Aryaman", "Aryan", "Atharva", "Avi", "Avyaan", "Ayush", "Ayushman", "Azaan", "Azad", "Bachittar", "Bahadurjit", "Bakhshi", "Balendra", "Balhaar", "Baljiwan", "Balvan", "Balveer", "Banjeet", "Bhaavik", "Bhavin", "Brijesh", "Chaitanya", "Chakradev", "Chakradhar", "Champak", "Chanakya", "Chandran", "Chandresh", "Charan", "Chatresh", "Chatura", "Chitaksh", "Daksh", "Dakshesh", "Dalbir", "Darpan", "Darsh", "Darshit", "Dev", "Dhanuk", "Dhruv", "Divij", "Divyansh", "Eeshan", "Ehsaan", "Ekalinga", "Ekapad", "Ekaraj", "Ekavir", "Gagan", "Gatik", "Gaurang", "Gauransh", "Gaurav", "Gautam", "Girik", "Girindra", "Girish", "Gopal", "Gunbir", "Guneet", "Hardik", "Harish", "Harsh", "Harshil", "Hemang", "Himmat", "Hitesh", "Hridaan", "Hritik", "Hunar", "Ikbal", "Ikshit", "Imaran", "Indrajit", "Isaac", "Ishwar", "Ivaan", "Izaan", "Jagat", "Jagdish", "Jai", "Jainew", "Jaiyush", "Jason", "Jatin", "Jeet", "Jivin", "Kabir", "Kalpit", "Kanav", "Karan", "Kiaan", "Krish", "Krishiv", "Krishna", "Kushagra", "Laban", "Laksh", "Lakshay", "Lakshit", "Lauhit", "Lucky", "Maanas", "Maanav", "Madhav", "Manan", "Manav", "Manbir", "Manthan", "Medhansh", "Mitesh", "Moksh", "Nachiket", "Naksh", "Nakul", "Naveen", "Navodit", "Nihal", "Nimit", "Nirvaan", "Nishith", "Nitesh", "Ohas", "Om", "Omkaar", "Onveer", "Orinder", "Parv", "Pranav", "Pranay", "Praneel", "Pranit", "Pratham", "Pratyush", "Purab", "Rachit", "Raghav", "Ranbir", "Ranveer", "Rehaannew", "Rishi", "Ritvik", "Rohan", "Ronith", "Rudranew", "Rudransh", "Rushil", "Ryan", "Saatvik", "Sahil", "Sai", "Saihaj", "Saksham", "Samaksh", "Samar", "Samarth", "Sarthak", "Sathviknew", "Savar", "Shaan", "Shaurya", "Shayak", "Shivansh", "Shlok", "Shray", "Siddharth", "Stuvan", "Suveer", "Taksh", "Tanay", "Tanish", "Tanmay", "Tanveer", "Tanvik", "Tarak", "Teerth", "Tejas", "Udant", "Udarsh", "Ujjwal", "Umang", "Upkaar", "Uthkarsh", "Utkarsh", "Vaibhav", "Veer", "Viaannew", "Virat", "Vivaan",   "Warinder", "Warjas", "Wriddhish", "Wridesh", "Yagnesh", "Yatan", "Yatin", "Yug", "Yuvaan", "Yuvraj", "Ekansh", "Hredhaan", "Jairaj", "Reyansh", "Samesh", "Viraj", "Yash", "Nikita", "Himani", "Rupansh", "Rashi", "Kapil", "Kajal", "Vikas", "Sairam", "Kasak", "Parikshit", "Ankit", "Aditi", "Mohit", "Ashik", "Praveen", "Bharat", "Kriti", "Prachi", "Sourabh", "Kishan", "Ashish", "Pooja", "Chhavi", "Suraj", "Vidushi", "Ritika", "Akshita", "Bulbul", "Amit", "Anupam", "Tanisha", "Gagandeep", "Akshat", "Priyansh", "Dinesh", "Ashita", "Vishal", "Sagar", "Parakh", "Abhishek", "Balvinder", "Shivam", "Nitin", "Tushar", "Suyash", "Shreyansh", "Lakshya", "Swapnil", "Amisha", "Anagh", "Rahul", "Yashwant", "Sharda", "Khushi", "Shweta", "Rajneesh", "Chandra", "Mega", "Mithil", "Prayas", "Deepak", "Aman", "Piyush", "Soumya", "Prateek", "Ayaz", "Namrata", "Visharad", "Surabhi", "Amrish", "Parag", "Rishap", "Ketan", "Ajay", "Pranjali", "Nikhil", "Anuj", "Ajeet", "Ankita", "Neeraj", "Vandana", "Sangita", "Rishabh", "Ravinder", "Mangesh", "Chitranshu", "Malkaus", "Jitendra", "Naman", "Pavan", "Vijay", "Pankaj", "Sumit", "Shubham", "Lokesh", "Palak", "Govind", "Urmila", "Vidit", "Prashant", "Ghanshyam", "Mishant", "Ravi", "Rohit", "Swati", "Divyanshi", "Arun", "Prithviraj", "Nisha", "Parantap", "Lokendra", "Milky", "Vickky", "Mayank", "Niranjan", "Akansha", "Rakesh", "Neha", "Ashok", "Deepika", "Purusottam", "Kamaldeep", "Somesh", "Gunjan", "Pragati", "Nishant", "Divye", "Ronak", "Aditya", "Ankur", "Anshul", "Anuja", "Abhijit", "Deepshikha", "Ganesh", "Madhura", "Kaushik", "Prarabdh", "Sarvani", "Upasna", "Ketaki", "Kusum", "Narmada", "Naveena", "Nishtha", "Nivedita", "Salena", "Sanchali", "Sanchaya", "Sanjana", "Shivani", "Shubhada", "Sumitra", "Tarangini", "Tarjani", "Trilochana", "Mog", "Omprakash", "Prabodh", "Praful", "Som", "Laxman", "Ram", "Jayram", "Motiram", "Tukaram", "Mahadev", "Shiv", "Shiva", "Rudra", "Kanha", "Kanhaiya", "Kisan", "Kisna", "Vishnu", "Hari", "Vitthal", "Laxmi", "Rukhmini", "Narayan", "Namdeo", "Shyam", "Badra", "Bhadra", "Radha", "Radhe", "Radheshyam", "Gokuldas", "Ramdas", "Jnaneshwar", "Mukta", "Sopan", "Nivritti", "Sandhya", "Rupali", "Rupa", "Bhardwaj", "Bhupen", "Arul", "Atul", "Bahadur", "Baldeb", "Baldev", "Bijoy", "Binod", "Vinod", "Biren", "Chamanlal", "Bablu", "Pinki", "Lalla", "Chanda", "Chandan", "Chandragupt", "Dasrath", "Debendra", "Hariram", "Harinarayan", "Kalicharan", "Murugan", "Kartik", "Karuna", "Varuna", "Aruna", "Aparna", "Lakshmikant", "Lalit", "Mukund", "Mohan", "Murali", "Manohar", "Saurabh", "Sorabji", "Nidhi", "Pravin", "Rajni", "Samir", "Aseem", "Suman", "Saroj", "Natwar", "Prithvi", "Pavan", "Shweta", "Urmila", "Vijay", "Mithil", "Mithila", "Saraswati", "Sharda", "Kashi", "Swami", "Baba", "Nal", "Neel", "Damyanti", "Sati", "Parvati"],

    "LastName" : ["Devi", "Singh", "Kumar", "Lal", "Ram", "Bai", "Kanwar", "Chand", "Bano", "Kumari", "Kour", "Sharma", "Sih", "Kanvar", "Prasad", "Prakash", "Chandra", "Narayan", "Kunvar", "Mal", "Jain", "Banu", "Das", "Meena", "Niwas", "Gupta", "Sahay", "Saini", "Nath", "Shankar", "Yadav", "Soni", "Kishore", "Pal", "Rani", "Raj", "Mohan", "Agarwal", "Varma", "Kunwar", "Sundar", "Kumavat", "Charan", "Dayal", "Gurjar", "Kishan", "Dev", "Pratap", "Choudhari", "Lata", "Kor", "Mathur", "Goyal", "Jangid", "Joshi", "Bala", "Kuwar", "Sain", "Prajapat", "Khatun", "Gopal", "Kuvar", "Puri", "Kishor", "Karan", "Bhati", "Parik", "Garg", "Mina", "Nagar", "Bairava", "Parvin", "Sen", "Vyas", "Bihari", "Chaaidhari", "Shah", "Jat", "Giri", "Kha", "Suman", "Salim", "Swaroop", "Mali", "Dan", "Mishra", "Chouhan", "Kavan", "Banon", "Kala", "Pyari", "Vaishnav", "Ji", "Khandelaval", "Ben", "Shyam", "Panvar", "Solanki", "Chauhan", "Ray", "Choudhary", "Khatu", "Laxmi", "Bansal", "Sahu", "Kant", "Mahavar", "Nisha", "Swami", "Bharati", "Parihar", "Mehta", "Chandar", "Saxena", "Chaudhari", "Patel", "Vijay", "Suthar", "Mehara", "Khatri", "Gehlot", "Nayak", "Purohit", "Ravat", "Shekhavat", "Rav", "Rathore", "Krishan", "Babu", "Aroda", "Mittal", "Tiwari", "Tanvar", "Meghaval", "Prajapati", "Kavar", "Chaaihan", "Jahan", "Dei", "Kumawat", "Bhai", "Yogi", "Kathat", "Goutam", "Singhal", "Khandelwal", "Rathoud", "Bhargav", "Dadhich", "Hasan", "Janki", "Rawat", "Rathaud", "Pareek", "Sankhala", "Kanya", "Nand", "Ratan", "Dhar", "Goswami", "Bhil", "Shri", "Verma", "Vishnoi", "Meghwal", "Deen", "Tank", "Kothari", "Kanta", "Rathour", "Palival", "Gameti", "Modi", "Regar", "Rathi", "Tak", "Shekhawat", "Shekhar", "Panchal", "Avatar", "Shrivastav", "Rathaaid", "Nisanh", "Paravin", "Dave", "Kuvar", "Bohara", "Goud", "Bhandari", "Parashar", "Murari", "Datt", "Malav", "Agrawal", "Maheshwari", "Jha", "Hada", "Maheshvari", "Chaturvedi", "Paramar", "Kaur", "Shahid", "Seni", "Gochar", "Shukla", "Upadhyay", "Pandey", "Salam", "Nivas", "Rashid", "Telar", "Chan", "Bahadur", "Bharadvaj", "Kashyap", "Vati", "Mansuri", "Agraval", "Lodha", "Dangi", "Raval", "Pathak", "Ojha", "Kumhar", "Bhan", "Bhatiya", "Arya", "Mandal", "Bhatanagar", "Var", "Ara", "Godara", "Manohar", "Sihan", "Nandan", "Teli", "Sagar", "Chodhari", "Nama", "Rajavat", "Bunakar", "Rana", "Chhipa", "Tyagi", "Sethi", "Kapur", "Bhatt", "Khatik", "Dhakad", "Devada", "Bishnoi", "Kushavah", "Raja", "Kalyan", "Jagid", "Om", "Mangal", "Salavi", "Trivedi", "Bhushan", "Rajapurohit", "Mehata", "Kamar", "Rathod", "Sisodiya", "Vir", "Arora", "Tivadi", "Said", "Davi", "Lalavani", "Bhagwan", "Thakur", "Kanuvar", "Pati", "Lakshmi", "Banjara", "Harun", "Gaaid", "Baksh", "Kori", "Mevada", "Wai", "Jatav", "Rajput", "Jen", "Pande", "Knvar", "Tripathi", "Gandhi", "Dube", "Patidar", "Raigar", "Rajak", "Dikshit", "Phool", "Ramjan", "Achary", "Chavala", "Rais", "Bhat", "Harijan", "Gahalot", "Jakhad", "Naj", "Kaair", "Bhargava", "Kanvari", "Katariya", "Bari", "Malik", "Jangir", "Hak", "Krishna", "Naruka", "Somani", "Sharan", "Devasi", "Gaur", "Shrimali", "Ahuja", "Kuumar", "Sukh", "Paliwal", "Saran", "Khanna", "Dhaka", "Bajaj", "Sattar", "Gir", "Prabha", "Surana", "Bhardwaj", "Gujar", "Gotam", "Koli", "Panwar", "Jit", "Luhar", "Moham", "Jindal", "Gautam", "Gaud", "Anand", "Pareta", "God","Sharan", "Raj", "Dave", "Sonkamble", "Kamble", "Patil", "Patel", "More", "Nikam", "Nigam", "More", "Dimble", "Bharule", "Padir", "Joshi", "Kudewal", "Paliwal", "Sonwal", "Matade", "Acharya", "Bhat", "Bhatt", "Rajkumar", "Kulkarni", "Langute", "Sawant", "Samant", "Pardeshi", "Desai", "Kishore", "Alatkar", "Akolkar", "Chatta", "Raina", "Sonar", "Gayakwad", "Dubey", "Sattigeri", "Giri", "Tonde", "Varpe", "Thakur", "Bogewar", "Sathe", "Bhosale", "Bensekar", "Patil", "Patwa", "Sahasrabuddhe", "Swaraj", "Muley", "Kole", "Kolekar", "Varghese", "Sunthe", "Sunthankar", "Tambi", "Srivastava", "Arane", "Ghawade", "Nimbalkar", "Pathare", "Tambe", "Tope", "Joshi", "Mukherjee", "Ashok", "Singh", "Dhane", "Kolhe", "Gajare", "Dhanawade", "Tamboli", "Davkhare", "Dhande", "Deshmukh", "Gangne", "Shingala", "Singhvi", "Munde", "Mehta", "Mirajkar", "Sinnarkar", "Mahajan", "Gagnani", "Bhagat", "Kelkar", "Kale", "Bankar", "Shah", "Gade", "Gadekar", "Jasud", "Kirdant", "Kothari", "Kakade", "Dhoka", "Khandare", "Nair", "Khaparde", "Veer", "Prakash", "Rangdale", "Raut", "Bhangare", "Narayan", "Pandit", "Karmakar", "Karmarkar", "Gandewar", "Zulphe", "Tambade", "Ujanikar", "Pisat", "Pisal", "Shinde", "Vahadane", "Khanapurkar", "Maya", "Khatke", "Ghalame", "Bhagwat", "Golande", "Gavali", "Nakhate", "Khairnar","Patil", "Madar", "Nayka", "Hiremath", "Lamani", "Badiger", "Biradar", "Talavar", "Mulla", "Kambale", "Rathod", "Pujari", "Kumar", "Nadaph", "Harijan", "Cavhan", "Kumbar", "Kulakarni", "Pujar", "Jadhav", "Gauda", "Nayak", "Nayik", "Hadapad", "Sekha", "Bhajantri", "Pavar", "Angadi", "Desayi", "Valikar", "Calavadi", "Hosamani", "Dodamani", "Vaddar", "Madivalar", "Setti", "Hugar", "Pujeri", "Jamadar", "Gaudar", "Mujavar", "Mathapati", "Hegade", "Pattar", "Kuri", "Sindhe", "Makanadar", "Kammar", "Sanadi", "Doddamani", "Mali", "Meti", "Patel", "Bandivaddar", "Pathan", "Bagavan", "Hadimani", "Khota", "Attar", "Kambar", "Mane", "Uppar", "Sutar", "Kattimani", "Koli", "Bepari", "Reddy", "Naykar", "Dalavayi", "Singh", "Kadam", "Gurav", "Rao", "Kalal", "Ganiger", "Josi", "Kolakar", "Bhatt", "Metri", "Sunagar", "Hubballi", "Bhat", "Caugule", "Inamadar", "Teli", "Ballari", "Kittur", "Caugal", "Magadumm", "Malagi", "Gowda", "Budihal", "Betageri", "Savanur", "Koppad", "Navi", "Madival", "Jain", "Shetty", "Bajantri", "Katti", "Rajaput", "Dasar", "Mulimani", "Bagevadi", "Banakar", "Raj", "Pujer", "Pattanasetti", "Gaudr", "Prasad", "More", "Ambiger", "Agasar", "Momin", "Manga", "Kambali", "Desapande", "Gupta", "Baraker", "Sharma", "Halli", "Barki", "Karigar", "Bhosale", "Khaji", "Itagi", "Lohar", "Sajjan", "Gavade", "Hosur", "Mathad", "Caugale", "Suryavansi", "Kadakol", "Bhandari", "Kale", "Saudagar", "Yadav", "Disoj", "Salunke", "Natikar", "Naragund", "Savant", "Dharavad", "Sirahatti", "Avati", "Caudhari", "Jamakhandi", "Konnur", "Kori", "Bagali", "Gayakavad", "Olekar", "Annigeri", "Patagar", "Hatti", "Maniyar", "Bhovi", "Sunkad", "Koti", "Naykodi", "Kaladagi", "Prabhu", "Kurubar", "Sinde", "Dodmani", "Gasti", "Killedar", "Matha", "Bilagi", "Huded", "Kamat", "Hegde", "Parit", "Devadig", "Das", "Karadi", "Myageri", "Gadivaddar", "Kulkarni", "Tahasildar", "Sirur", "Naganur", "Jambagi", "Kamate", "Vali", "Jaina", "Acari", "Totad", "Hipparagi", "Babu", "Ullagaddi", "Huddar", "Gollar", "Ganacari", "Saiyad", "Gadad", "Mulagund", "Pai", "Akki", "Athani", "Marathi", "Hallur", "Kallimani", "Dandin", "Havaldar", "Bandi", "Nair", "Bidari", "Yadavad", "Bankapur", "Koravar", "Bijapur", "Pirajade", "Pendari", "Yaligar", "Managuli", "Baligar", "Mullanavar", "Hukkeri", "Magadum", "Gaddi", "Yaragatti", "Navalagund", "Naik", "Naduvinamani", "Kaujalagi", "Aralikatti", "Mokasi", "Alura", "Kademani", "Valmiki", "Pharnandis", "Haveri", "Mirji", "Kurabar", "Murthy", "Mantur", "Nadhaph", "Karjagi", "Ghatage", "Sansi", "Kundagol", "Jadar", "Kalaburgi", "Nadap", "Jakati", "Ahmed", "Hebballi", "Moger", "Galagali", "Khana", "Hittalamani", "Hebbal", "Singe", "Talikoti", "Seta", "Devaramani", "Hosalli", "Mugali", "Savadatti", "Pinjar", "Jogi", "Teradal", "Gaundi", "Belagali", "Kudari", "Krishna", "Ambig", "Harikantr", "Jadav", "Hullur", "Kali", "Javali", "Hadagali", "Nagaral", "Sirol", "Arera", "Rai", "Tigadi", "Navhi", "Mohan", "Ganvakar", "Kallur", "Ingalagi", "Halemani", "Mishra", "Katagi", "Ingale", "Raju", "Badagi", "Melinamani", "Nalaband", "Muragod", "Nandi", "Mudhol", "Helavar", "Sarma", "Balikayi", "Nadhap", "Asangi", "Kolur", "Gauli", "Saha", "Caudari", "Kolekar", "Revanakar", "Bhavikatti", "Mirasi", "Prakash", "Settar", "Kabbur", "Palled", "Salimath", "Kamatagi", "Vastrad", "Hiremani", "Hunagund", "Ambi", "Badami", "Rav", "Iliger", "Eligar", "Hiregaudr", "Nidagundi", "Kundaragi", "Hunasikatti", "Makandar", "Munavalli", "Bennur", "Uppin", "Iti", "Sinha", "Ronad", "Odeyar", "Ankalagi", "Cakrasali", "Ilager", "Sayyad", "Kannur", "Byadagi", "Tamboli", "Gavad", "Dambal", "Kumari", "Menasinakayi", "Sannakki", "Ghorpade", "Timmapur", "Kotagi", "Agadi", "Gonda", "Shankar", "Guggari", "Arakeri", "Hamchinamani", "Tuppad", "Mohite", "Medar", "Acary", "Malladad", "Niralagi", "Hirekurabar", "Jalihal", "Reddi", "Halagi", "Dollin", "Asundi", "Savadi", "Raykar", "Vernekar", "Saba", "Godi", "Savalagi", "Kanavi", "Multani", "Kore", "Hongal", "Gani", "Joshi", "Agasimani", "Mallapur", "Belaganvakar", "Mamadapur", "Balekundri", "Goravar", "Huli", "Mannur", "Mudigaudr", "Sonnad", "Anand", "Kerur", "Hancinamani", "Bhangi", "Nyamagaud", "Avaradi", "Dange", "Sangolli", "Halageri", "Bipatil", "Gurikar", "Gadag", "Mukri", "Indi", "Maradi", "Mesta", "Sing", "Lakkundi", "Joseph", "Hec", "Kalyani", "Ramadurg", "Gokak", "Hulagur", "Ukkali", "Pola", "Hamchinal", "Bendigeri", "Sindagi", "Potadar", "Kankanavadi", "Krishnan", "Korabu", "Chabbi", "Malage", "Benni", "Candaragi", "Laksmesvar", "Kamatar", "Pammar", "Khanapur", "Kolli", "Bani", "Bagi", "Ganager", "Vibhuti", "Honnalli", "Mirajakar", "Dodavad", "Hancinal", "Agarwal", "Abbigeri", "Naidu", "Negalur", "Siraguppi", "Harikant", "Mudalagi", "Adina", "Talageri", "Jagiradar", "Jatagar", "Pyati", "Mayannavar", "Magi", "Hallikeri", "Kakhandaki", "Sahapurakar", "Shaik", "Kharvi", "Karikatti", "Saiyyad", "Masali", "Caudri", "Vijapur", "Hombal", "Byahatti", "Kalakeri", "Hanagandi", "Nalavade", "Banasode", "Kalasannavar", "Svami", "Tahasiladar", "Havaladar", "Bellad", "Hanji", "Kokatanur", "Marigaudr", "Radder", "Alagur", "Thomas", "Talakeri", "Sagar", "Doni", "Jahagiradar", "Roy", "Hirekurubar", "Vaggar", "Gali", "Incal", "Havanur", "Rotti", "Totagi", "Bisanal", "Saravad", "Hulamani", "Teggi", "Muccandi", "Hunasyal", "Pinto", "Siddapur", "Rugi", "Byakod", "Mallur", "Halyal","Jayagiri", "Duggirala", "Mukkapati", "Eedupalli", "Bapatla", "Sambatur", "Tadinada", "Tadanki", "Chinta", "Pabbaraju", "Ventrapragada", "Korimilli", "Gurazada", "Ivaturi", "Tallapaka", "Vankamamidi", "Buddhavarapu", "Gundimeda", "Devarabhotla", "Puvvada", "Chimakurthy", "Chinta", "Bapatla", "Yarrapragada", "Balabhadrapatruni", "Komaravolu", "Chadalawada", "Lakkaraju", "Thungathurthi", "Chodavarapu", "Tadinada", "Arjarapu", "Somayajula", "Gurazada", "Kanchikacharala", "Boyinepalli", "Siddiraju", "Cheemalamarri", "Tamirisa", "Satram", "Kadambari", "Ravulaparti", "Tadanki", "Inumella", "Chimakurthy", "Bhattiprolu", "Poruri", "Vadlamudi", "Durgaraju", "Gaddamanugu", "Vonkamamidi", "Thungathurthi", "Jeedigunta", "Parimi", "Bhupatiraju", "Potharaju", "Vaddadi", "Rupanagunta", "Munimanikyam", "Mynampati", "Tadinada", "Kotichintala", "Neelamraju", "Srikaram", "Kanukollu", "Pagolu", "Timmaraju", "Neelamraju", "Kotichintala", "Vanam", "Vallambhatla", "Pulikanti", "Cheruku", "Khandaladinne", "Gangaravula", "Iragavarapu", "Samudram", "Ravuri", "Vaddadi", "Potturi", "Budharaju", "Muppalla", "Vemula", "Yarrapragada", "Ravuri", "Nadella", "Rayabharam", "Ayinambrolu", "Nadela", "Vedagiri", "Kandukuri", "Gadiraju", "Chittamuri", "Kotharu", "Polavaram", "Tatavarthy", "Nimishakavi", "Paramkusham", "Seethimraju", "Andukuri", "Avatapalli", "Potturi", "Sambaraju", "Turlapaty", "Bapatla", "Ravinutala", "Gundimeda", "Potharaju", "Polamraju", "Bapatla", "Bendapudi", "Tadakamalla", "Devulapalli", "Ayyagari", "Boyinepalli", "Tallapragada", "Vakkalanka", "Duggirala", "Munimanikyam", "Errapragada", "Unnava", "Venuturupalle", "Gangaraju", "Malyala", "Kotichintala", "Seethamraju", "Tadakamalla", "Ayyalaraju", "Kanala", "Ippagunta", "Anumarlapudi", "Somaasi", "Kaligotla", "Dronamraju", "Singam", "Ayinambrolu", "Vonkamamidi", "Nimushakavi", "Somaasi", "Gunnikuntla", "Bhogaraju", "Chatrathi", "Neelamraju", "Turlapati", "Mukkamala", "Lakkavajjula", "Manchikanti", "Josyula", "Gadiraju", "Bhogaraju", "Chimakurthy", "Kesinapalli", "Nadimpalli", "Suraparaju", "Kamaraju", "Gadda", "Pabbaraju", "Vallambhatla", "Bakaraju", "Mulpuri", "Ippagunta", "Singampalli", "Unnava", "Annapragada", "Kanukollu", "Tallapaka", "Pullamaraju", "Devulapalli", "Vadlamannati", "Yabaloori", "Singam", "Challapally", "Samudram", "Suraparaju", "Anantavarapu", "Pulipaka", "Nellutla", "Palutla", "Punyamurthula", "Polavaram", "Rajasekharuni", "Mannem", "Ravinutala", "Pamulaparthi", "Tallapragada", "Nadela", "Adiraju", "Paramatmuni", "Ambarukhana", "Vadlamudi", "Tallapaka", "Palakodety", "Kanchnepalli", "Vahi", "Raghavachari", "Bhograj", "Sannikandlapadu", "Neelamraju", "Potharaju", "Puvvada", "Santapur","Jain", "Sharma", "Bhatia", "Kanojia", "Singh", "Ankata", "Agrawal", "Rathore", "Parihar", "Singhal", "Saini", "Sanpada", "Chhipa", "Kothari", "Mohnot", "Mishra", "Gupta", "Agarwal", "Bhather", "Jangid", "Palod", "Pareek", "Rastogi", "Chaudhary", "Ojha", "Jajoo", "Khandelwal", "Rathi", "Bohra", "Bothra", "Gyanchandani", "Bansal", "Kushwah", "Tilwani", "Vardhan", "Gurbani", "Aggarwal", "Kumar", "Tejwani", "Awasthi", "Mathur", "Tiwari", "Mehta", "Solanki", "Prakash", "Yadav", "Tekwani", "Arora", "Mukesh", "Sarfraz", "Saxena", "Jhalani", "Goyal", "Lathwal", "Saifi", "Mahadi", "Mahawar", "Dubey", "Somani", "Vijay", "Maheshwari", "Gandhi", "Rupani", "Chalana", "Kumawat", "Verma", "Khicher", "Soni", "Chouhan", "Vijayvargiya", "Negi", "Hirani", "Darji", "Bakliwal", "Bhargava", "Jangir", "Pritmani", "Khinchi", "Kumari", "Nankani", "Gaur", "Goswami", "Lakhotiya", "Bagariya", "Joshi", "Agnani", "Parashar", "Gautam", "Madhuwani", "Bhootra", "Rawani", "Pitaliya", "Mehlawat", "Kaur", "Shrimali", "Bagda", "Pandya", "Gauttam", "Tela", "Singhavi", "Dhanotiya", "Raj", "Auti", "Chirde", "Jha", "Sadashiv", "Phadke", "Madugundi", "Karmakar", "Dhomne", "Kmar", "Rana", "Thakur", "Chansoria", "Bhagat", "Nimkar", "Dudhe", "Patel", "Patil", "Datir", "Datar", "Kulkarni", "Doshi", "Dave", "Modi", "Dadhe", "Kasambe", "Tayade", "Tajane", "Dhule", "Kurhade", "Korade", "Karade", "Tarade", "Kadu", "Gode", "Gole", "Borkar", "Gugliya", "Pugliya", "Sangani", "Papalkar", "Nerkar", "Nagpure", "Punekar", "Narawane", "Rawat", "Rawal", "Rajput", "Sisodiya", "Thakkar", "Thaker", "Bele", "Sambe", "Acharya", "Agate", "Ahluwalia", "Ahuja", "Amble", "Anand", "Andra", "Anne", "Apte", "Arya", "Atwal", "Aurora", "Babu", "Badal", "Badami", "Bahl", "Bahri", "Bail", "Bains", "Bajaj", "Bajwa", "Bakshi", "Bal", "Bala", "Balakrishnan", "Balan", "Balasubramanian", "Balay", "Bali", "Bandi", "Banerjee", "Banik", "Barad", "Baral", "Baria", "Barman", "Basak", "Bassi", "Basu", "Bath", "Batra", "Batta", "Bava", "Bawa", "Bedi", "Behl", "Ben", "Bera", "Bhakta", "Bhalla", "Bhandari", "Bhardwaj", "Bhasin", "Bhat", "Bhatnagar", "Bhatt", "Bhattacharyya", "Bhatti", "Bhavsar", "Bir", "Biswas", "Boase", "Bobal", "Bora", "Borah", "Borde", "Borra", "Bose", "Brahmbhatt", "Brar", "Buch", "Bumb", "Butala", "Chacko", "Chad", "Chada", "Chadha", "Chahal", "Chakrabarti", "Chakraborty", "Chana", "Chand", "Chanda", "Chander", "Chandra", "Chandran", "Char", "Chatterjee", "Chaudhari", "Chaudhry", "Chaudhuri", "Chaudry", "Chauhan", "Chawla", "Cheema", "Cherian", "Chhabra", "Chokshi", "Chopra", "Choudhary", "Choudhry", "Choudhury", "Chowdhury", "Comar", "Contractor", "D’Alia", "Dada", "Dalal", "Dani", "Dar", "Dara", "Das", "Dasgupta", "Dash", "Dass", "Date", "Datta", "Dayal", "De", "Deep", "Deo", "Deol", "Desai", "Deshmukh", "Deshpande", "Devan", "Devi", "Dewan", "Dey", "Dhaliwal", "Dhar", "Dhawan", "Dhillon", "Dhingra", "Din", "Divan", "Dixit", "Doctor", "Dora", "Dua", "Dube", "Dugal", "Dugar", "Dutt", "Dutta", "Dyal", "Edwin", "Gaba", "Gade", "Gala", "Ganesan", "Ganesh", "Ganguly", "Gara", "Garde", "Garg", "Gera", "Ghose", "Ghosh", "Gill", "Goda", "Goel", "Gokhale", "Gola", "Golla", "Gopal", "Gour", "Grewal", "Grover", "Guha", "Gulati", "Halder", "Handa", "Hans", "Hari", "Hayer", "Hayre", "Hegde", "Hora", "Issac", "Iyengar", "Iyer", "Jaggi", "Jani", "Jayaraman", "Jhaveri", "Johal", "Kadakia", "Kade", "Kakar", "Kala", "Kale", "Kalita", "Kalla", "Kamdar", "Kanda", "Kannan", "Kant", "Kapadia", "Kapoor", "Kapur", "Kar", "Kara", "Karan", "Kari", "Karnik", "Karpe", "Kashyap", "Kata", "Kaul", "Keer", "Khalsa", "Khanna", "Khare", "Khatri", "Khosla", "Khurana", "Kibe", "Kohli", "Konda", "Korpal", "Koshy", "Kota", "Krish", "Krishna", "Krishnamurthy", "Krishnan", "Kumer", "Kunda", "Kurian", "Kuruvilla", "Lad", "Lal", "Lala", "Lall", "Lalla", "Lanka", "Lata", "Loke", "Loyal", "Luthra", "Madan", "Magar", "Mahajan", "Mahal", "Maharaj", "Majumdar", "Malhotra", "Mall", "Mallick", "Mammen", "Mand", "Manda", "Mandal", "Mander", "Mane", "Mangal", "Mangat", "Mani", "Mann", "Mannan", "Manne", "Master", "Mathai", "Matthai", "Meda", "Mehan", "Mehra", "Mehrotra", "Meka", "Memon", "Menon", "Merchant", "Minhas", "Misra", "Mistry", "Mital", "Mitra", "Mittal", "Mitter", "Mody", "Mohan", "Mohanty", "Morar", "More", "Mukherjee", "Mukhopadhyay", "Muni", "Munshi", "Murthy", "Murty", "Mutti", "Nadig", "Nadkarni", "Nagar", "Nagarajan", "Nagi", "Nagy", "Naidu", "Naik", "Nair", "Nanda", "Narain", "Narang", "Narasimhan", "Narayan", "Narayanan", "Narula", "Natarajan", "Nath", "Natt", "Nayak", "Nayar", "Nazareth", "Nigam", "Nori", "Oak", "Om", "Oommen", "Oza", "Padmanabhan", "Pai", "Pal", "Palan", "Pall", "Palla", "Panchal", "Pandey", "Pandit", "Pant", "Parekh", "Parikh", "Parmar", "Parmer", "Parsa", "Pathak", "Patla", "Pau", "Peri", "Pillai", "Pillay", "Pingle", "Prabhakar", "Prabhu", "Pradhan", "Prasad", "Prashad", "Puri", "Purohit", "Radhakrishnan", "Raghavan", "Rai", "Raja", "Rajagopal", "Rajagopalan", "Rajan", "Raju", "Ram", "Rama", "Ramachandran", "Ramakrishnan", "Raman", "Ramanathan", "Ramaswamy", "Ramesh", "Randhawa", "Ranganathan", "Rao", "Ratta", "Rattan", "Ratti", "Rau", "Raval", "Ravel", "Ravi", "Ray", "Reddy", "Rege", "Rout", "Roy", "Sabharwal", "Sachar", "Sachdev", "Sachdeva", "Sagar", "Saha", "Sahni", "Sahota", "Salvi", "Sama", "Sami", "Sampath", "Samra", "Sandal", "Sandhu", "Sane", "Sangha", "Sanghvi", "Sani", "Sankar", "Sankaran", "Sant", "Saraf", "Saran", "Sarin", "Sarkar", "Sarma", "Sarna", "Sarraf", "Sastry", "Sathe", "Savant", "Sawhney", "Sehgal", "Sekhon", "Sem", "Sen", "Sengupta", "Seshadri", "Seth", "Sethi", "Setty", "Sha", "Shah", "Shan", "Shankar", "Shanker", "Sharaf", "Shenoy", "Shere", "Sheth", "Shetty", "Shroff", "Shukla", "Sibal", "Sidhu", "Sinha", "Sodhi", "Som", "Soman", "Sood", "Sridhar", "Srinivas", "Srinivasan", "Srivastava", "Subramaniam", "Subramanian", "Sule", "Sundaram", "Sunder", "Sur", "Sura", "Suresh", "Suri", "Swaminathan", "Swamy", "Tailor", "Tak", "Talwar", "Tandon", "Taneja", "Tank", "Tara", "Tata", "Tella", "Thaman", "Toor", "Tripathi", "Trivedi", "Upadhyay", "Uppal", "Vaidya", "Vala", "Varghese", "Varkey", "Varma", "Varty", "Varughese", "Vasa", "Venkataraman", "Venkatesh", "Vig", "Virk", "Viswanathan", "Vohra", "Vora", "Vyas", "Wable", "Wadhwa", "Wagle", "Wali", "Walia", "Walla", "Warrior", "Wason", "Yogi", "Yohannan", "Zacharia", "Zachariah", "Vashishta", "Laghari", "Anthony", "Ramayanam", "Burman", "Varman", "Vasu", "Tahore", "Thakore", "Chowdhary", "Chabra", "Chaddha", "Amin", "Pande", "Ayyar", "Haldar", "Surya", "Chavan", "Pawar", "Panwar", "Dayawan", "Malik", "Bahuguna", "Jan", "Vishwas", "Sukhdev", "Dev", "Kovind", "Nishad", "Jamsenpa", "Thokchom", "Laishram", "Swuro", "Boro", "Kom", "Chanu", "Murti", "Yadav", "Shah"],

    "EmailDomain" : ["gmail", "googlemail", "example", "company", "example", "company", "example", "company","mail", "email", "domain", "domain","domain", "example", "company", "email", "domain", "india","network", "yahoo", "rediff", "outlook", "metaverse", "miniverse", "worldmail", "times", "hotmail", "msn", "yupmail", "live", "me", "telecom", "mac", "century", "digital", "aim", "skynet", "symbol", "email", "workplace", "timber", "bharat", "digital", "workplace","workplace","bharat", "computer", "market"],
    
    "EmailEnd" : ["com", "in", "net", "org", "com", "net", "com", "com", "net", "org", "in","com","com","com","com","org","org","in","in"],

    "State" : ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamilnadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal","Andaman and Nicobar","Chandigarh","Dadra and Nagar Haveli","Daman and Diu","Delhi","Lakshadweep","Puducherry", "Ladakh"],

    //In states arrays: first element is short name useful for driving license. Second element is total number of RTOs to be used for getting max value of driving license RTO. Third element is a postal zone number to use as first letter of that state's PINcode series

    "Andhra Pradesh" : ["AP","39","5","Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Krishna", "Kurnool", "Sri Potti Sri Ramulu Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari"],

    "Arunachal Pradesh" : ["AR","22","7","Anjaw", "Changlang", "East Siang", "Kurung Kumey", "Lohit", "Lower Dibang Valley", "Lower Subansiri", "Papum Pare", "Tawang", "Tirap", "Dibang Valley", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang"],

    "Assam" : ["AS","34","7","Baksa", "Barpeta", "Bongaigaon", "Cachar", "Chirang", "Darrang", "Dhemaji", "Dima", "Hasao", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Marigaon", "Nagaon", "Nalbari", "Sibsagar", "Sonitpur", "Tinsukia", "Udalguri"],

    "Bihar" : ["BR","57","8","Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East", "Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West", "Champaran", "Chandigarh"],

    "Chhattisgarh" : ["CG","30","4","Bastar", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Jashpur", "Janjgir Champa", "Korba", "Koriya", "Kanker", "Kabirdham", "Kawardha", "Mahasamund", "Narayanpur", "Raigarh", "Rajnandgaon", "Raipur", "Surguja"],

    "Dadra and Nagar Haveli": ["DD","1","3","Dadra and Nagar Haveli"],

    "Daman and Diu" : ["DD","3","3","Daman", "Diu"],

    "Delhi" : ["DL","13","1","Central Delhi","East Delhi","New Delhi","North Delhi","North East Delhi","North West Delhi","South Delhi","South West Delhi","West Delhi"],

    "Goa" : ["GA","12","4","North Goa", "South Goa"],

    "Gujarat" : ["GJ","38","3","Ahmedabad", "Amreli", "Anand", "Banaskantha", "Bharuch", "Bhavnagar", "Dahod", "The Dangs", "Gandhinagar", "Jamnagar", "Junagadh", "Kutch", "Kheda", "Mehsana", "Narmada", "Navsari", "Patan", "Panchmahal", "Porbandar", "Rajkot", "Sabarkantha", "Surendranagar", "Surat", "Vyara", "Vadodara", "Valsad"],
    
    "Haryana" : ["HR","99","1","Ambala", "Bhiwani", "Faridabad", "Fatehabad", "Gurgaon", "Hissar", "Jhajjar", "Jind", "Karnal", "Kaithal", "Kurukshetra", "Mahendragarh", "Mewat", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamuna Nagar"],

    "Himachal Pradesh" : ["HP","97","1","Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],

    "Jammu and Kashmir" : ["JK","22","1","Anantnag", "Badgam", "Bandipora", "Baramulla", "Doda", "Ganderbal", "Jammu", "Kathua", "Kishtwar", "Kupwara", "Kulgam", "Poonch", "Pulwama", "Rajauri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"],

    "Ladakh" : ["LA","2","1","Leh", "Kargil"],

    "Jharkhand" : ["JH","24","8","Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribag", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahibganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"],

    "Karnataka" : ["KA","71","5","Bagalkot", "Bangalore Rural", "Bangalore Urban", "Belgavi", "Bellary", "Bidar", "Bijapur", "Chamarajnagar", "Chikkamagaluru", "Chikkaballapur", "Chitradurga", "Davanagere", "Dharwad", "Dakshina Kannada", "Gadag", "Gulbarga", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysore", "Raichur", "Shimoga", "Tumkur", "Udupi", "Uttara Kannada", "Ramanagara", "Yadgir"],

    "Kerala" : ["KL","99","6","Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thrissur", "Thiruvananthapuram", "Wayanad"],

    "Madhya Pradesh" : ["MP","74","4","Alirajpur", "Anuppur", "Ashok Nagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Narmadapuram", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Rewa", "Rajgarh", "Ratlam", "Raisen", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],

    "Maharashtra" : ["MH","50","4","Ahmednagar", "Akola", "Amravati", "Aurangabad", "Bhandara", "Beed", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nandurbar", "Nanded", "Nagpur", "Nashik", "Osmanabad", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sindhudurg", "Sangli", "Solapur", "Satara", "Thane", "Wardha", "Washim", "Yavatmal"],

    "Manipur" : ["MN","7","7","Bishnupur", "Churachandpur", "Chandel", "Imphal East", "Senapati", "Tamenglong", "Thoubal", "Ukhrul", "Imphal West"],

    "Meghalaya" : ["ML","10","7","East Garo Hills", "East Khasi Hills", "Jaintia Hills", "Ri Bhoi", "South Garo Hills", "West Garo Hills", "West Khasi Hills"],

    "Mizoram" : ["MZ","8","7","Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"],

    "Nagaland" : ["NL","8","7","Dimapur", "Kohima", "Mokokchung", "Mon", "Phek", "Tuensang", "Wokha", "Zunheboto"],

    "Odisha" : ["OD","35","7","Angul", "Boudh", "Bhadrak", "Balangir", "Bargarh", "Balasore", "Cuttack", "Debagarh", "Dhenkanal", "Ganjam", "Gajapati", "Jharsuguda", "Jajpur", "Jagatsinghpur", "Khordha", "Kendujhar", "Kalahandi", "Kandhamal", "Koraput", "Kendrapara", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nuapada", "Nayagarh", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundergarh"],

    "Puducherry" : ["PY","5","6","Karaikal", "Mahe", "Puducherry", "Yanam"],

    "Punjab" : ["PB","91","1","Amritsar", "Barnala", "Bathinda", "Firozpur", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Sri Muktsar Sahib", "Pathankot", "Patiala", "Rupnagar", "Mohali", "Sangrur", "Nawanshahr", "Tarn Taran"],

    "Rajasthan" : ["RJ","58","3","Ajmer", "Alwar", "Bikaner", "Barmer", "Banswara", "Bharatpur", "Baran", "Bundi", "Bhilwara", "Churu", "Chittorgarh", "Dausa", "Dholpur", "Dungapur", "Ganganagar", "Hanumangarh", "Jhunjhunu", "Jalore", "Jodhpur", "Jaipur", "Jaisalmer", "Jhalawar", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sikar", "SawaiMadhopur", "Sirohi", "Tonk", "Udaipur"],

    "Sikkim" : ["SK","4","7","East Sikkim", "North Sikkim","South Sikkim", "West Sikkim"],

    "Tamilnadu" : ["TN","99","6","Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanyakumari", "Karur", "Madurai", "Nagapattinam", "Nilgiris", "Namakkal", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Tirupur", "Tiruchirappalli", "Theni", "Tirunelveli", "Thanjavur", "Thoothukudi", "Tiruvallur", "Tiruvarur", "Tiruvannamalai", "Vellore", "Viluppuram", "Virudhunagar"],

    "Telangana" : ["TS","38","5","Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagitial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal", "Mulugu", "Nagarkurnool", "Narayanpet", "Nalgonda", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"],
    
    "Tripura" : ["TR","8","7","Dhalai", "North Tripura", "South Tripura", "Khowai", "West Tripura"],

    "Uttar Pradesh" : ["UP","96","2","Agra", "Prayagraj", "Aligarh", "Ambedkar Nagar", "Auraiya", "Ayodhya", "Azamgarh", "Barabanki", "Budaun", "Bagpat", "Bahraich", "Bijnor", "Ballia", "Banda", "Balrampur", "Bareilly", "Basti", "Bulandshahr", "Chandauli", "Chhatrapati Shahuji Maharaj Nagar", "Chitrakoot", "Deoria", "Etah", "Kanshi Ram Nagar", "Etawah", "Firozabad", "Farrukhabad", "Fatehpur", "Gautam Buddh Nagar", "Gonda", "Ghazipur", "Gorakhpur", "Ghaziabad", "Hamirpur", "Hardoi", "Mahamaya Nagar", "Jhansi", "Jalaun", "Jyotiba Phule Nagar", "Jaunpur", "Ramabai Nagar", "Kannauj", "Kanpur", "Kaushambi", "Kushinagar", "Lalitpur", "Lakhimpur Kheri", "Lucknow", "Mau", "Meerut", "Maharajganj", "Mahoba", "Mirzapur", "Moradabad", "Mainpuri", "Mathura", "Muzaffarnagar", "Panchsheel Nagar", "Pilibhit", "Shamli", "Pratapgarh", "Rampur", "Raebareli", "Saharanpur", "Sitapur", "Shahjahanpur", "Sant Kabir Nagar", "Siddharthnagar", "Sonbhadra", "Sant Ravidas Nagar", "Sultanpur", "Shravasti", "Unnao", "Varanasi"],

    "Uttarakhand" : ["UK","20","2","Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragarh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],

    "West Bengal" : ["WB","99","7","Birbhum", "Bankura", "Bardhaman", "Darjeeling", "Dakshin Dinajpur", "Hooghly", "Howrah", "Jalpaiguri", "Cooch Behar", "Kolkata", "Maldah", "Paschim Medinipur", "Purba Medinipur", "Murshidabad", "Nadia", "North 24 Parganas", "South 24 Parganas", "Purulia", "Uttar Dinajpur"],

    "Andaman and Nicobar" : ["AN","1","7","Bakultala", "Bambooflat", "Garacharma", "Port Blair", "Prothrapur", "Nicobar"],

    "Lakshadweep" : ["LD","9","6","Amini", "Andrott", "Kadmat", "Kalpeni", "Kavaratti", "Minicoy"],

    "Chandigarh" : ["CH","4","1","Chandigarh"],

    //Villages in group of their corresponding postal zones (for simplicity). Ideally we can have them in state wise distribution
    "1villages" : ["Adoya", "Ajrawar", "Azmatpur", "Babkpur", "Bachki", "Bakhli", "Baloch", "Basantpur", "Batheri", "Bhainsi", "Bherian", "Bhor", "Bhorak", "Bhusthla", "Bibipur", "Bodha", "Bodhni", "Chamun", "Chanal", "Chhajupur", "Chhawlan", "Dhani", "Dhulgarh", "Diwana", "Duniya", "Fatehgarh", "Gangheri", "Garhi", "Gledwa", "Gorkha", "Guldehra", "Gumthala", "Helwa", "Ishaq", "Ismailabad", "Ismailpur", "Jakhwala", "Jal", "Jhansa", "Jhinwarheri", "Jorasi", "Kakrala", "Kalsa", "Kamoda", "Kanthala", "Karah", "Khanjarpur", "Khanpur", "Kheri", "Khizar", "Kumhar", "Lohar", "Lotni", "Madaharan", "Majri", "Malakpur", "Mandi", "Mangna", "Megha", "Mohanpur", "Morthali", "Muqimpura", "Murtzapur", "Naisi", "Nikatpura", "Nimbwala", "Nurpur", "Pehowa", "Pipli", "Ramgarh", "Rampura", "Rattangarh", "Rohti", "Ruan", "Saidpur", "Sandhola", "Sandholi", "Sansa", "Sarsa", "Sarusti", "Sataura", "Seonsar", "Shahpur", "Shanti", "Sheikhpur", "Shergarh", "Shri", "Siana", "Singh", "Surmi", "Tabra", "Takoran", "Talheri", "Tangoli", "Teokar", "Thana", "Thandran", "Thaska", "Theh", "Thol", "Tikri", "Urnai", "Urnaicha", "Usmanpur", "Zulmat", "Ahmadpur", "Akbarpur", "Ambli", "Andheri", "Azampur", "Babak", "Badhauli", "Badi", "Bakarpur", "Baktuha", "Ballopur", "Banaundi", "Bapauli", "Bara", "Baragarh", "Barheri", "Bari", "Baroli", "Barsu", "Batora", "Behloli", "Ber", "Berpura", "Bharanpur", "Bharog", "Bheron", "Bichpari", "Bilaspur", "Boron", "Brahman", "Budha", "Bukhari", "Burj", "Chand", "Chautan", "Chechi", "Chhajal", "Chhajju", "Chhotagarh", "Chhoti", "Dabkora", "Danora", "Dehar", "Dehri", "Dera", "Dhamauli", "Dhanana", "Dudhli", "Fatehpur", "Ferozepur", "Gadauli", "Ganauli", "Ganeshpur", "Gazipur", "Gharauli", "Gobindpur", "Hamidpur", "Handi", "Harbon", "Hassanpur", "Husaini", "Jagatpur", "Jangoo", "Jangu", "Jatwar", "Jeoli", "Jhar", "Kakar", "Kalal", "Kalyana", "Kanjala", "Karasan", "Kathe", "Khera", "Kheragani", "Kherki", "Khirki", "Khurd", "Kohra", "Korwa", "Kullarpur", "Kurali", "Laha", "Lakhnaura", "Lalpur", "Lautan", "Magharpura", "Majra", "Manakpur", "Manglor", "Mawa", "Mianpur", "Milk", "Mirpur", "Mirzapur", "Mugal", "Mukandpur", "Muna", "Nabipur", "Nagal", "Nagauli", "Nagla", "Nakhrauli", "Nanduwali", "Nanehra", "Nangawan", "Naraingarh", "Nasrauli", "Nau", "Nek", "Okhal", "Panjauri", "Panjeton", "Panjlasa", "Parail", "Patrehri", "Patwi", "Pulewala", "Rachheri", "Raiwali", "Rajawali", "Rajpura", "Raju", "Rampur", "Rao", "Rasidpur", "Rataur", "Rerh", "Sadanpur", "Sadaqpur", "Salola", "Sam", "Samru", "Sangrani", "Santokhi", "Shahzadpur", "Shakarpura", "Sherpur", "Sian", "Singhpura", "Sontli", "Surgal", "Taharpur", "Tandwal", "Tanka", "Tapparian", "Tapri", "Tasraula", "Tasrauli", "Tepla", "Toka", "Ujjhal", "Wasalpur", "Adampura", "Aklia", "Allike", "Badlala", "Balianwala", "Balloh", "Bhagta", "Bhai", "Bhaini", "Bhodipura", "Bhunder", "Bugran", "Chaoke", "Chotian", "Dashmesh", "Daulatpura", "Dayalpura", "Dhade", "Dhapali", "Dhingar", "Dikh", "Dulewala", "Dyalpura", "Gaunspura", "Ghandawna", "Ghurela", "Ghureli", "Gill", "Gumti", "Gurusar", "Hakam", "Hamirgarh", "Har", "Harnam", "Jaidan", "Jalal", "Jawahar", "Jeondan", "Jethuke", "Jhanduke", "Kangar", "Kararwala", "Kauloke", "Kesar", "Khokhar", "Koer", "Kotha", "Kotra", "Maluka", "Mansa", "Nandgarh", "Neor", "Outgrowth", "Patti", "Phul", "Phulewala", "Pirkot", "Pitho", "Raiya", "Rajgarh", "Ram", "Ramuwala", "Sadhana", "Salabatpura", "Sandhu", "Selbrah", "Siriewala", "Sooch", "Achan", "Adekali", "Ajtani", "Akalpur", "Akuwal", "Anihar", "Apra", "Ashaur", "Atta", "Atti", "Aujla", "Bachhowal", "Bainapur", "Bajar", "Bakapur", "Bansian", "Bath", "Batura", "Begampur", "Behlolpur", "Bhadarpur", "Bhallowal", "Bhandal", "Bhangala", "Bhangali", "Bhar", "Bhardwaji", "Bharuwal", "Bhattian", "Bhoda", "Bhullar", "Bhundri", "Bilga", "Bir", "Birk", "Bundala", "Buraj", "Chachrari", "Chak", "Chanian", "Cheema", "Chhaula", "Chhokran", "Cholang", "Chuheki", "Daduwal", "Dalewal", "Dalla", "Danduwal", "Darapur", "Dhanda", "Dhandwar", "Dhanipind", "Dhesian", "Dhindsa", "Dhinpur", "Dholeta", "Dialpur", "Dosanjh", "Gadra", "Gag", "Ganna", "Garha", "Ghurka", "Giddarpindi", "Gohawar", "Goraya", "Gulamgarh", "Gumtala", "Gumtali", "Gura", "Gursian", "Hardo", "Haripur", "Indna", "Jago", "Jaitowal", "Jaja", "Jajo", "Jand", "Jandiala", "Jhungian", "Johal", "Kala", "Kandola", "Kang", "Kangniwal", "Kariana", "Kat", "Katana", "Khaira", "Khela", "Khojpur", "Khokhewal", "Khosla", "Kot", "Kotli", "Kutbewal", "Ladhar", "Ladian", "Lakhanpal", "Lalian", "Landara", "Langrian", "Lasara", "Lehal", "Lohgarh", "Machhiana", "Mahal", "Mainwal", "Mansurpur", "Masani", "Matfallu", "Mathadda", "Mau", "Mawai", "Mehsampur", "Miranpur", "Mithra", "Moron", "Muthadda", "Muzara", "Nagar", "Nagra", "Nahal", "Nangal", "Nanu", "Nat", "Nathewal", "Nawan", "Nurewal", "Nurmahal", "Pabwan", "Paddi", "Pal", "Palnau", "Pandori", "Panj", "Partappura", "Pasla", "Pasli", "Pawahri", "Phalpota", "Pharwala", "Phillaur", "Powadra", "Qadian", "Raipur", "Rajauri", "Rajgomal", "Rajowal", "Rajpur", "Ramewal", "Randhawa", "Ranwan", "Rara", "Rasulpur", "Rupowal", "Rurka", "Rurki", "Sadhara", "Sagarpur", "Saidowal", "Saifabad", "Salkiana", "Samrai", "Samrari", "Sangatpur", "Sangha", "Sangowal", "Sargundi", "Sarhal", "Sarhali", "Shadipur", "Shampur", "Shamsabad", "Sheikhupur", "Sidhu", "Simbalpur", "Sultanpur", "Sunar", "Sundar", "Surja", "Tagar", "Takhan", "Takhar", "Talwan", "Tehang", "Thala", "Thammanwal", "Turan", "Umarpur", "Uppal", "Bajaura", "Balh", "Bandrol", "Banogi", "Barahar", "Bastori", "Benchi", "Bhallan", "Bhalyani", "Bhullang", "Bhumtir", "Bhuntar", "Biasar", "Bradha", "Chong", "Dawara", "Diar", "Dobhi", "Dughilag", "Dunkhri", "Fojal", "Gahar", "Gramang", "Hallan", "Hat", "Jallu", "Jana", "Jandor", "Jari", "Kais", "Kashawri", "Katrain", "Kharal", "Kharihar", "Khokhan", "Kullu", "Majhat", "Malana", "Mandalgarh", "Manikarn", "Manjhli", "Manjhlihar", "Mashna", "Meha", "Mohal", "Nathan", "Neol", "Parli", "Peej", "Phallan", "Pichhli", "Pichlihar", "Pini", "Rajgiri", "Ratocha", "Rote", "Sari", "Shamshi", "Shat", "Shillihar", "Shirar", "Sosan", "Alashna", "Antraoli", "Anu", "Bag", "Bagah", "Baghar", "Bahal", "Bajroth", "Bal", "Bamnol", "Bamrar", "Bamta", "Barhich", "Barkoli", "Barog", "Batewri", "Batewri", "Belag", "Berag", "Bhaila", "Bhanal", "Bharola", "Bhatna", "Bhaulanu", "Bhot", "Bhut", "Bijar", "Bodna", "Chaflan", "Chanjal", "Chanpadli", "Charauli", "Chaukia", "Chaupal", "Chila", "Chiuna", "Chiwna", "Chohag", "Chorwadhar", "Dasholi", "Deot", "Deothi", "Dhabas", "Dhanewri", "Dhanout", "Dharan", "Digun", "Dilmu", "Dimon", "Gadhral", "Gagna", "Garhin", "Ghichna", "Ghurla", "Giau", "Gorli", "Gorwa", "Gyalat", "Hanal", "Jabna", "Jai", "Jaili", "Jangal", "Jawag", "Jhikni", "Jhina", "Jorna", "Jubbar", "Kalun", "Kande", "Kashah", "Kateika", "Kathiyana", "Katont", "Katoti", "Kauhrala", "Kelwi", "Khadar", "Khagna", "Khaprona", "Kharog", "Kharu", "Kiari", "Koti", "Kuhal", "Kujwi", "Kulandli", "Kumra", "Kurag", "Kutanda", "Lagaut", "Lajonth", "Lakha", "Lal", "Lihat", "Lingzar", "Majhotli", "Makraug", "Mamvi", "Mandholi", "Maraug", "Mashraon", "Matal", "Mishliuna", "Mohan", "Nanahar", "Naoni", "Nar", "Naura", "Nauran", "Pabas", "Pajarli", "Phalauna", "Pharach", "Pujari", "Rapari", "Rarth", "Rawtan", "Sangroli", "Sarahan", "Saralda", "Sarkali", "Satka", "Shagair", "Shantha", "Shapra", "Shawala", "Shihali", "Shila", "Shili", "Shithna", "Sihana", "Thalog", "Thundal", "Thundna", "Thuth", "Tiari", "Tipra"],

    "2villages" : ["Abhaypura", "Agra", "Akbarpur", "Akola", "Albatia", "Anguthi", "Artauni", "Azizpur", "Babarpur", "Bad", "Bagda", "Bahenta", "Bain", "Bainpur", "Baipur", "Bajhera", "Balhera", "Bamrauli", "Barara", "Barauli", "Basai", "Basua", "Bhahai", "Bhandai", "Bichpuri", "Bijhamai", "Bilahani", "Bisarna", "Bishara", "Bishari", "Brahmnagar", "Budhana", "Budhera", "Chak", "Chamrauli", "Chauhatna", "Dayalbagh", "Dehtora", "Deoretha", "Deori", "Dhamota", "Dhanauli", "Digner", "Etmadpur", "Gamari", "Gangraua", "Garhsani", "Gutla", "Hingot", "Ikthara", "Islampur", "Itaura", "Jakhoda", "Janara", "Jarua", "Jaupura", "Kaboolpur", "Kahrai", "Kakrari", "Kakua", "Kalal", "Kalika", "Kalwari", "Karmana", "Kaulakha", "Khal", "Khallauwa", "Khaspur", "Khera", "Kuan", "Kundol", "Kuthawati", "Lakavali", "Lakhanpur", "Lalau", "Laramada", "Lodhai", "Mahua", "Malpura", "Manghatai", "Mankenda", "Mayapura", "Mehra", "Midhakur", "Mundhera", "Nadauta", "Nagla", "Nainana", "Nanpur", "Naubari", "Nauphari", "Pachgain", "Patholi", "Patti", "Pawawali", "Pinani", "Rajrai", "Rampura", "Rohta", "Sadarban", "Sahara", "Saimari", "Salemabad", "Samogar", "Sargan", "Sarvatpur", "Shyamo", "Sikandarpur", "Siroli", "Sucheta", "Sujgai", "Sunari", "Sutendi", "Swami", "Swamibagh", "Tanora", "Tapara", "Tora", "Baramadiya", "Adhawar", "Ahirouli", "Ajaour", "Ajnera", "Akasar", "Akhani", "Araji", "Arjani", "Asana", "Babarapur", "Babhnouli", "Bachha", "Badasari", "Bagara", "Baghudi", "Bahdura", "Baheri", "Bal", "Balesadi", "Balupur", "Banhara", "Bankata", "Barhuncha", "Baro", "Basti", "Belatari", "Bhadikara", "Bhagawanpur", "Bhagipur", "Bharthawa", "Bhati", "Bhimhar", "Bhuda", "Bijulipur", "Bishar", "Bishunpura", "Chakpema", "Chamukha", "Chandawa", "Chandayar", "Chandi", "Chandpur", "Chanduki", "Chawari", "Chhatarsand", "Chhitupali", "Dandupur", "Dewakali", "Dhanauti", "Dhaneja", "Dharampur", "Dharhara", "Dhori", "Dhuraudha", "Diyara", "Dobhawa", "Doghara", "Dugooli", "Dugouli", "Duha", "Durjanpur", "Eakel", "Esar", "Fatehpur", "Firojpur", "Fulwarria", "Gadhamalpur", "Gai", "Gaji", "Gang", "Gaura", "Godoura", "Gokul", "Gopalpur", "Gouri", "Habatpur", "Hardiya", "Haripur", "Harnatar", "Harsand", "Hathouj", "Husenpur", "Jagdishpur", "Jahidipur", "Jajooli", "Jalali", "Jamalpur", "Jamin", "Jaminwali", "Jamue", "Januwan", "Jethwar", "Jigirsand", "Jildapur", "Jugesara", "Kaith", "Kajipur", "Kalyan", "Karmouta", "Karsand", "Karsi", "Katahra", "Kathooda", "Kathwallia", "Khabaspur", "Khadasara", "Khaira", "Kharid", "Khatanga", "Khejuri", "Kikodha", "Kishor", "Kisunpura", "Kodai", "Koodiya", "Koth", "Kundi", "Lakhanapar", "Letaraha", "Lilkar", "Loohar", "Mahro", "Mahthapar", "Mahulanpar", "Mahuwa", "Majhwallia", "Malada", "Maleji", "Malwar", "Mashaha", "Masumpur", "Meulikanaspur", "Mirzapur", "Mishrouli", "Misraulia", "Mudera", "Mueya", "Muhammadpur", "Mujhi", "Murracha", "Mustafabad", "Nahila", "Nanhul", "Narayanpur", "Narhami", "Nawa", "Nipnnia", "Pagambarpur", "Pahrajpur", "Pakdi", "Pandah", "Parsadpur", "Payarepur", "Pilue", "Pranpur", "Punai", "Pur", "Puru", "Ramapar", "Ranjitpur", "Ranpur", "Ratsi", "Raxa", "Rudarwar", "Rudwar", "Rupwar", "Sahulai", "Salempur", "Sandawapur", "Santhi", "Sarani", "Sardahi", "Sariyion", "Sarkanda", "Sarya", "Sasanu", "Shankarpur", "Sidhauli", "Sihoria", "Sikanderpur", "Sikiya", "Sisotar", "Siwan", "Son", "Sona", "Sonu", "Tandawa", "Tarakol", "Tenduwa", "Tika", "Tiloti", "Tiwaripur", "Uchrawn", "Ukchhi", "Umedha", "Usari", "Walidadpur", "Aduki", "Ahilya", "Ahmal", "Allhepur", "Anganpura", "Anore", "Anwla", "Arhera", "Aring", "Atas", "Aurangabad", "Azampur", "Baburi", "Bachhgaon", "Badhauta", "Bajna", "Bakalpur", "Balrai", "Bamoli", "Baqalpur", "Barari", "Barauda", "Basonti", "Bati", "Begampur", "Beri", "Beruka", "Bhadal", "Bhadar", "Bhadaya", "Bhaderua", "Bhagosa", "Bhainsa", "Bhavanpura", "Bhuarsu", "Birjapur", "Birona", "Bisu", "Borpa", "Chandrabhan", "Chharaura", "Chharhgaon", "Chhatikara", "Chokipur", "Churmura", "Datiya", "Daulatpur", "Devseras", "Dhakpura", "Dhana", "Dhangaon", "Dharmpura", "Dhorera", "Farah", "Fateha", "Ganesara", "Ganjoli", "Gantholi", "Garhaya", "Garhi", "Girdharpur", "Gokulpur", "Govardhan", "Goverdhan", "Govindpur", "Hakimpur", "Hasanpur", "Hathaoli", "Ikdanta", "Jachonda", "Jafar", "Jaisinghpura", "Jait", "Jalal", "Jamunavata", "Janu", "Jatipura", "Jhandipur", "Jhapara", "Jhurawai", "Jikhangaon", "Jiroli", "Jodhpur", "Jonai", "Junhaidi", "Junsuti", "Karanpur", "Karnawal", "Kawaila", "Keshonpur", "Khamini", "Khediya", "Kherat", "Kirarai", "Koh", "Koila", "Konai", "Kosi", "Kota", "Kothara", "Kunjera", "Kurkanda", "Ladpur", "Lalpur", "Loriha", "Luhara", "Madanpura", "Madaura", "Madhopur", "Madhuri", "Maghera", "Magorra", "Mahmadpur", "Maholi", "Mahroli", "Mahuan", "Mai", "Makhdum", "Mal", "Malhu", "Malikpur", "Malsarai", "Masum", "Mathura", "Meghpur", "Mirpur", "Mora", "Mudesi", "Mudseras", "Muhal", "Muiuddinpur", "Mukandpur", "Mukhrai", "Murshidpur", "Nabipur", "Nagari", "Nainupatti", "Narholi", "Navada", "Navganva", "Neemgaon", "Ol", "Padal", "Pali", "Palidungara", "Palson", "Parkham", "Pauri", "Pentha", "Phenchari", "Phondar", "Pilua", "Pingari", "Piprauth", "Pura", "Radhakund", "Rahimpur", "Raipura", "Rajpur", "Ral", "Rampur", "Ranchi", "Rasulpur", "Ronchi", "Rosu", "Sakana", "Sakarwa", "Sakitara", "Sakraya", "Samaspur", "Sanaura", "Sarurpur", "Satoha", "Saunkh", "Seeh", "Senha", "Sersa", "Shahpur", "Shahzoopur", "Shehzadpur", "Singa", "Sonkh", "Sonoth", "Sonsa", "Sunrakh", "Tahra", "Tarsi", "Tartura", "Thirawali", "Tond", "Tos", "Umari", "Unchagaon", "Uspar", "Vrindaban", "Vrindavan", "Birsinghpur", "Adampur", "Ahirauli", "Ahmadpur", "Airla", "Aitha", "Ajawan", "Ajor", "Akhari", "Akhileshpur", "Alamnagar", "Alauddinpur", "Allopur", "Amar", "Amara", "Amauli", "Amaulia", "Amini", "Amripur", "Amwa", "Anantpur", "Appi", "Arajiline", "Arazi", "Arjunpur", "Arka", "Asapur", "Ashar", "Aswari", "Atarsuia", "Atarsuiya", "Ateshua", "Aura", "Awadhipur", "Ayar", "Ayodhyapur", "Azgara", "Babatpur", "Babhaniyav", "Babhanpura", "Babua", "Bachhawn", "Badhaini", "Badher", "Badipur", "Bahadurpur", "Baherwa", "Bahlolpur", "Bahoranpur", "Bahra", "Bahuawn", "Baijal", "Bairwan", "Bajardiha", "Bakaini", "Bakhani", "Bakhariya", "Baksara", "Balipur", "Balirampur", "Balkishunpur", "Ballampur", "Balua", "Banauli", "Bandepur", "Bandhar", "Bangalipur", "Baniyapur", "Bankat", "Bansipur", "Bantari", "Banwaripur", "Bara", "Baragaon", "Barai", "Baraipur", "Baraura", "Barema", "Barhaini", "Barikhpur", "Bariyasanpur", "Barki", "Barsara", "Barsata", "Barthara", "Bartharra", "Barthauli", "Barwapur", "Barzi", "Basant", "Basantpur", "Basawan", "Basbariya", "Basdevpur", "Basuhan", "Baviyaon", "Bazar", "Bela", "Belauri", "Belwa", "Benipur", "Berhauli", "Beshupur", "Betwar", "Beyar", "Bhabhiyar", "Bhadarasi", "Bhadwan", "Bhadwar", "Bhagatpur", "Bhaghutipur", "Bhagwanpur", "Bhandaha", "Bhanjanpur", "Bharaharia", "Bharaon", "Bharatpur", "Bhareha", "Bharehara", "Bharthara", "Bhatauli", "Bhatpurwa", "Bhatshar", "Bhatti", "Bhaudpur", "Bhawanipur", "Bhgautipur", "Bhidur", "Bhikhampur", "Bhikharipur", "Bhikhipur", "Bhimchandi", "Bhisori", "Bhitari", "Bhitkuri", "Bhitti", "Bhohar", "Bhojubeer", "Bhor", "Bhorkala", "Bhualpur", "Bhuilaee", "Bhullanpur", "Bhuwalpur", "Bibhauri", "Biparjepur", "Birampur", "Birapur", "Birbalpur", "Birbhanpur", "Bisokharpur", "Bisunpur", "Bisunpura", "Biththalpur", "Blarampur", "Brijwasi", "Burapur", "Chadpur", "Chahi", "Chakarpanpur", "Chakatesua", "Chakdiha", "Chakdiharam", "Chaklola", "Chaktal", "Chamauli", "Chandapur", "Chandrawati", "Chaubepur", "Chaukhandi", "Chaur", "Chhahi", "Chhateri", "Chhatripur", "Chhitampur", "Chhitauni", "Chhitpur", "Chintapur", "Chiraigaon", "Chitaipur", "Chitarsenpur", "Cholapur", "Chukha", "Chukhepur", "Chumkuni", "Chunarpur", "Churamanpur", "Coraut", "Dabethuwa", "Dafalpur", "Dafi", "Daghariya", "Dalpattipur", "Damodarpur", "Dandoopur", "Daniyalpur", "Darberupur", "Darekhu", "Dasarath", "Dashrathpur", "Daudpur", "Daulatiya", "Dayapur", "Deipur", "Delhana", "Demrupur", "Deorai", "Deoriya", "Deuara", "Deura", "Devnandpur", "Devopalpur", "Dewapur", "Dewariya", "Dhadhorpur", "Dhakhawa", "Dhananjaipur", "Dhanapur", "Dhanipur", "Dhannipur", "Dhanpalpur", "Dharadhar", "Dharmalpur", "Dharsauna", "Dhaurhara", "Dherahi", "Dhobahi", "Dholapur", "Dhoraee", "Dhuripur", "Dihwa", "Dilavalpur", "Dinapur", "Dindaspur", "Dipapur", "Domaila", "Domanpur", "Domari", "Dubepur", "Dubkiya", "Duduhan", "Dulhanpur", "Dumitwan", "Ekdanga", "Etwa", "Faridpur", "Foolpur", "Gaddopur", "Gahani", "Gaharpur", "Gairaha", "Gajadharpur", "Gajapur", "Gajari", "Gajepur", "Ganeshpur", "Gangapur", "Gangpur", "Garsara", "Garthauli", "Gaur", "Gaurapurwar", "Gaurdiha", "Ghamahapur", "Ghamhapur", "Ghatmpur", "Ghosila", "Gobindpur", "Gobrha", "Gogawa", "Goithaha", "Gola", "Gopal", "Gopipur", "Goppur", "Gora", "Gorai", "Gosai", "Gosaipur", "Guria", "Gurudaspur", "Gurwat", "Hajipur", "Handiyadih", "Har", "Harbanspur", "Harbhampur", "Hardaspur", "Hardattpur", "Haridasipur", "Harihar", "Hariharpur", "Harirampur", "Harnampur", "Harpalpur", "Harpur", "Harsos", "Hasapur", "Hasimpur", "Hathi", "Hathiyar", "Hatiya", "Hinttapur", "Hiramanpur", "Hirampur", "Hirapur", "Hirdahipur", "Hirdepur", "Holapur", "Hulasipur", "Hulsipur", "Husepur", "Imiliya", "Isharwar", "Jaddupur", "Jaga", "Jagama", "Jagardeopur", "Jagati", "Jagatpur", "Jagdeeshpur", "Jagsipur", "Jairampur", "Jakhini", "Jalalpur", "Jalhupur", "Jameen", "Jamindarsan", "Jammanpur", "Jamunipur", "Jansa", "Jariyari", "Jayapur", "Jeetapur", "Jhabra", "Jhanjhupur", "Jigana", "Jiyaram", "Jogapur", "Jogiyapur", "Jugar", "Kachhariya", "Kachnar", "Kadipur", "Kaithi", "Kaithor", "Kaji", "Kakalpur", "Kakarahiya", "Kakarmatta", "Kallipur", "Kalyanpur", "Kama", "Kamalahan", "Kamalpur", "Kanchanpur", "Kandwa", "Kaneri", "Kanhipur", "Kankpur", "Kanthipur", "Kanudih", "Kapar", "Kapsa", "Kapsethi", "Kardhana", "Karia", "Karma", "Karmsipur", "Karnadadi", "Karsara", "Kashipur", "Kasipur", "Katari", "Katesar", "Katwaru", "Kauwapur", "Kerakatpur", "Kesaripur", "Ketesar", "Kevtan", "Khajuhi", "Khajur", "Khajuri", "Khalilpur", "Khalispur", "Khamauna", "Khandakh", "Khanpur", "Khanuan", "Khanwa", "Kharag", "Kharagaipur", "Kharagraipur", "Kharaura", "Khardaha", "Khargu", "Khemaipur", "Khemapur", "Khetalpur", "Khewali", "Khewasipur", "Khillupura", "Khochwa", "Khulaspur", "Khusipur", "Khutha", "Khuthan", "Kinnupur", "Kodopur", "Kohasi", "Koilo", "Kori", "Kosara", "Kotwa", "Kukraha", "Kundriya", "Kurauana", "Kurauli", "Kurauna", "Kurauti", "Kurhua", "Kursato", "Kursiyan", "Kutubpur", "Lachapur", "Lachhi", "Lachhimanpur", "Lachhipur", "Lachmisenpur", "Lahartara", "Lahiya", "Lakhanipur", "Lakhansenpur", "Lakhi", "Lal", "Lallapur", "Lalmankot", "Lamhi", "Laskariya", "Laskarpur", "Latauni", "Lathiya", "Laxirampur", "Lenuwayi", "Lerhupur", "Lohagazar", "Lohara", "Loharapur", "Lohta", "Looth", "Lorhan", "Madhukar", "Magrahua", "Mahaban", "Mahada", "Mahagipur", "Mahamudpur", "Mahesh", "Maheshpur", "Mahgoan", "Mahrajpur", "Majhiyarpur", "Majhmitia", "Majhmitiya", "Mangalpur", "Mangolepur", "Manikpur", "Maniyari", "Manorathpur", "Manrauli", "Marawan", "Marcha", "Marhawa", "Marhni", "Mariya", "Maruadih", "Marui", "Matuka", "Mawaiya", "Mechkanpur", "Mehadiganj", "Milkapur", "Milki", "Milkipur", "Mirapur", "Mirawan", "Mirchia", "Mishirpur", "Misripura", "Modhopur", "Moglabir", "Mohandas", "Mohanidih", "Mokalpur", "Mokarwan", "Molanapur", "Mubarakpur", "Mudli", "Mugdarpur", "Munari", "Mungawar", "Muradev", "Murdaha", "Mureri", "Muridpur", "Murli", "Musepur", "Nabbe", "Nagaipur", "Nagepur", "Naipur", "Naipura", "Nakain", "Nakhwan", "Naktuwa", "Naraicha", "Narottampur", "Narottmpur", "Narpatpur", "Narsara", "Narur", "Nasiripur", "Nathaipur", "Nathanpur", "Nathupur", "Nawalpur", "Nawalsha", "Nawapur", "Nayapur", "Nayapura", "Neema", "Newada", "Newriya", "Nibiya", "Nidaura", "Nighaura", "Nimani", "Niyaisipur", "Niyardiha", "Nohanipur", "Nonkharan", "Nuawn", "Odarha", "Pachabanawa", "Pachai", "Pacharon", "Pachwar", "Pahari", "Paharpur", "Pahriya", "Paidegaon", "Palahi", "Palkanhh", "Pandepur", "Panditpur", "Panihari", "Paniyara", "Paragdih", "Parampur", "Parana", "Paranapur", "Parjanpur", "Parmanandpur", "Parsi", "Parsottampur", "Parsuchak", "Parwatpur", "Paterwa", "Patkhauli", "Patre", "Pauha", "Pausi", "Payagpur", "Peduka", "Phakirpur", "Phulwaria", "Pilkhani", "Pilori", "Pipri", "Pisaur", "Piyri", "Pogalpur", "Prahladpur", "Pratap", "Pratappur", "Prithvipur", "Puran", "Purananda", "Purandarpur", "Puraraiji", "Purashiv", "Pure", "Raghunathpur", "Raimala", "Raishipur", "Rajapur", "Rajjipur", "Rajnahiya", "Rajwari", "Rakhauna", "Rakhi", "Ram", "Ramagharwan", "Ramaipur", "Ramchandipur", "Ramdat", "Ramdatha", "Ramdih", "Ramgaon", "Ramna", "Ramnagar", "Ramnisf", "Ramraypur", "Ramshipur", "Ramsinghpur", "Ranibazar", "Rasara", "Rashulpur", "Rasulaha", "Rasulgarh", "Ratan", "Rauna", "Razala", "Roopchandpur", "Rupapur", "Rustampur", "Sabhaipur", "Sadalpur", "Saee", "Sahabajpura", "Sahansapur", "Sahawabad", "Sajoi", "Sakalpur", "Salarpur", "Salhupur", "Sandaha", "Sapsaul", "Sarai", "Saraimohan", "Saraiya", "Sarang", "Sarauni", "Sarhari", "Sarswan", "Satahara", "Sathawan", "Sato", "Sattanpur", "Savhat", "Sehwar", "Serwanpur", "Shahdeeh", "Shaktiyarpur", "Shambhu", "Sheodabha", "Sheodas", "Sheonathpur", "Sheorampur", "Shihorwa", "Shivbon", "Shivdas", "Shivdaspur", "Shivrampur", "Shpehata", "Sikhari", "Singhai", "Singhpur", "Sinhorwa", "Sir", "Sirhira", "Sirsa", "Sonbarsa", "Soyepur", "Srikanthpur", "Srithi", "Suari", "Sugulpur", "Suichak", "Suilara", "Sulemapur", "Sultanipur", "Sultanpur", "Sumerapur", "Surhi", "Susuwahi", "Suzabad", "Tala", "Talhua", "Tamachabad", "Tara", "Taraon", "Tarapur", "Taraya", "Tari", "Tariya", "Tarna", "Tarsawn", "Tatehara", "Tatepur", "Tekari", "Tekariya", "Tekipur", "Tekuri", "Telari", "Tendui", "Tengara", "Tewar", "Thatheharapur", "Thatra", "Thekaha", "Therauta", "Tikari", "Tilamapur", "Tilanga", "Tilmapur", "Tinkerawa", "Tisaura", "Tiwari", "Todarpur", "Tofapur", "Tohaphapur", "Tribhuvanpur", "Tulachak", "Tulapur", "Uchgoan", "Udairajpur", "Udaypur", "Udho", "Ugapur", "Ukthi", "Umarha", "Upadhyaypur", "Uparwar", "Urawan", "Varanasi", "Varani", "Vihana", "Vikapur", "Vinathipur", "Vyaspur", "Zafarabad", "Banswara", "Ala", "Amkheth", "Anagoli", "Angthala", "Ansuya", "Bachher", "Baindu", "Bairagana", "Bairau", "Baligwar", "Bamiyala", "Banala", "Bandwara", "Banj", "Barachaksainji", "Barali", "Batula", "Baunla", "Bazbagar", "Bemru", "Bhadakoti", "Bhainswara", "Bhainti", "Bhairni", "Bhatingyala", "Bhatiyana", "Bhirlagga", "Bijar", "Birhi", "Boli", "Bura", "Chaka", "Chamoli", "Chamtoli", "Chandulichakhat", "Chaparudiyar", "Chappno", "Charbang", "Chari", "Chatolikiroli", "Chhinka", "Dadar", "Daswan", "Dewaldhar", "Dewar", "Dhanoli", "Dhar", "Dharkot", "Dharwani", "Dhogarikandai", "Dhola", "Dhurma", "Digoli", "Dungari", "Durmi", "Dusat", "F", "Gadi", "Gadora", "Gairgunth", "Gairi", "Gandasu", "Gauhana", "Gauna", "Gawar", "Ghorsal", "Ghuni", "Golim", "Guhai", "Gulari", "Guniyala", "Gwarlggabemru", "Hadung", "Harmani", "Hat", "Hina", "Huna", "Hung", "Irani", "Jainsal", "Jaintha", "Jakhni", "Jokhana", "Kafal", "Kamyar", "Kana", "Kanda", "Kandai", "Kanderi", "Kanol", "Kathur", "Keludichakgawar", "Khainuri", "Khala", "Khaltara", "Khinkan", "Khunana", "Kilondi", "Koteshwar", "Kudav", "Kumartoli", "Kumjug", "Kunjonmaikot", "Kunjpothani", "Kunkuli", "Kuntari", "Kurar", "Kurur", "Kuthan", "Kweralu", "Kwirali", "Lankhee", "Lasi", "Lasiyari", "Loladi", "Luntara", "Lwanh", "Lwani", "Maharbagti", "Mahargaon", "Maithana", "Majothi", "Majyu", "Makroli", "Malanachaknail", "Manakhi", "Mandal", "Mason", "Matai", "Math", "Matharpal", "Mathkot", "Mathlaggapilng", "Mathmalana", "Maunti", "Med", "Mokhmalla", "Mokhtala", "Mokhtalla", "Moling", "Motha", "Mutrai", "Nagartangsa", "Nagbugar", "Nailmalana", "Naini", "Naitoli", "Nandprayag", "Narangi", "Nauna", "Naurakh", "Nijmola", "Padairgaon", "Pagana", "Pagna", "Pairi", "Palethi", "Pana", "Pangar", "Panigair", "Parnmati", "Phali", "Pilang", "Pilkhola", "Punkila", "Pursari", "Rajbagti", "Ramani", "Rangtoli", "Rani", "Rauligwar", "Rikhtoli", "Ropa", "Ropachalthar", "Rudra", "Saikot", "Sainji", "Sainjilagga", "Sainti", "Saitoli", "Sakand", "Salaraitoli", "Sanji", "Sarpani", "Sartoli", "Saudiyani", "Seek", "Sema", "Semdugara", "Sena", "Sera", "Simali", "Simar", "Siron", "Sironsar", "Sitel", "Sonala", "Sung", "Suniti", "Sutol", "Syanachak", "Syari", "Syuna", "Tairakhansal", "Tangala", "Tartoli", "Tilfara", "Tunla", "Ustoli", "Vaduk"],

    "3villages" : ["Abapura", "Bheet", "Prithvigarh", "Amargun", "Amarpura", "Amba", "Ambakho", "Ambapara", "Ambawaj", "Amli", "Anandpura", "Arniya", "Azad", "Badleeya", "Badrel", "Bageri", "Bagpura", "Bagra", "Bakhatpura", "Banswara", "Bargaon", "Bari", "Barleeya", "Barlipara", "Baroda", "Barooi", "Barwara", "Bassi", "Beelriya", "Bhachariya", "Bhagat", "Bhagi", "Bhamariya", "Bhamriya", "Bhandariya", "Bhanwarkara", "Bhapor", "Bharatliya", "Bhatiya", "Bhatpura", "Bhatwara", "Bhawanpura", "Bheelwan", "Bheemgarh", "Bheleeya", "Bhojiya", "Bhoot", "Bijaliyan", "Bilakho", "Bodla", "Bor", "Boriya", "Borkhera", "Borkheri", "Bortalab", "Borwat", "Chacha", "Chanda", "Chandra", "Chapariya", "Charpota", "Chaubison", "Cheeb", "Chhaliyawar", "Chhani", "Chhapariya", "Chhappar", "Chhatrasalpura", "Chhayan", "Chhoti", "Chiriyawasa", "Chitab", "Dabri", "Damarwas", "Danakshari", "Danpur", "Dashahara", "Daulatpura", "Deogarh", "Deoka", "Deoliya", "Deri", "Detkeeya", "Detkiya", "Dhamaniya", "Dhawadadara", "Doongra", "Doriya", "Fateh", "Fatehpura", "Gagari", "Gagarwa", "Gamda", "Gamri", "Ganaoo", "Gandhi", "Ganpatpura", "Gara", "Garh", "Garnawat", "Gauwapara", "Ghalkiya", "Ghora", "Ghori", "Gopalpuri", "Gordi", "Got", "Hariyapada", "Harmatiya", "Harnathpura", "Hatkhera", "Higoliya", "Himmatpuri", "Hiriya", "Jagpura", "Jagtarawat", "Jahanpura", "Jambudor", "Janameri", "Janawari", "Jaswantpura", "Jeewa", "Jet", "Jhamliya", "Jhanjhiyamal", "Jhantla", "Jharniya", "Jhoopel", "Jhuwa", "Joona", "Jormiya", "Kadwali", "Kagwa", "Kakanseja", "Kala", "Kalanala", "Kaliyari", "Kalyanpura", "Kandola", "Kankra", "Kanpuri", "Karchhi", "Kareliya", "Katiyor", "Katumbi", "Kelwani", "Kesarpura", "Kevalpura", "Khajuri", "Khalda", "Khalpur", "Khandadera", "Khandiya", "Khandu", "Khanpura", "Khardeo", "Kharwali", "Kher", "Khera", "Kherdi", "Kheri", "Khori", "Khuntdiya", "Kikapara", "Koibao", "Kotra", "Kular", "Kundal", "Kundla", "Kundli", "Kuntabari", "Kunwala", "Kupra", "Kushalpura", "Lala", "Laloopara", "Lalpura", "Lambi", "Laxmangarh", "Leemkhora", "Leemthan", "Lodha", "Maheshpura", "Mahuri", "Makanpura", "Makod", "Malwasa", "Mangaliya", "Manpura", "Manpuri", "Mara", "Margali", "Masotiya", "Matasula", "Mediya", "Mediyadidor", "Mokam", "Moongthali", "Motira", "Muliya", "Mundri", "Nadiya", "Nagakhali", "Nal", "Nalda", "Napla", "Nathpura", "Nawa", "Nawalapara", "Nawatapra", "Negariya", "Nichla", "Nokla", "Odharji", "Ojhariya", "Pachor", "Pada", "Padamnath", "Padi", "Padikhurd", "Padla", "Pagari", "Palaswani", "Palodara", "Panchalwasa", "Paniwalagara", "Paniyala", "Parkha", "Parla", "Pathanpura", "Patinagra", "Peepalwa", "Peepli", "Peeplod", "Phati", "Phephar", "Pratap", "Prthvipura", "Radhawa", "Raghunathpura", "Rajeev", "Ramgarh", "Rangi", "Rani", "Ratan", "Rel", "Retiya", "Roonjadipada", "Roonjiya", "Rooparel", "Rooppura", "Sag", "Sageta", "Sagrod", "Sagwadeeya", "Sajjan", "Sajwaniya", "Sakarwat", "Sakri", "Saliya", "Salrapara", "Samagara", "Samaipura", "Samapara", "Samriya", "Sanga", "Sangesari", "Sarsi", "Sarwan", "Sarwani", "Sarwarpura", "Sat", "Seengpura", "Semla", "Semliya", "Sewna", "Shahpura", "Shakti", "Shivpura", "Shyampura", "Siyapur", "Siyari", "Subhash", "Sukhaniya", "Sundanpur", "Sundar", "Surajpura", "Surjipara", "Surpur", "Surwaniya", "Tadi", "Tagu", "Talab", "Talwara", "Tamtiya", "Tejpur", "Theekariya", "Thuriya", "Tilgari", "Torniya", "Ubapan", "Umrai", "Umripada", "Umripara", "Uplaghantala", "Vadlipara", "Veerpur", "Wagtalab", "Waka", "Wanala", "Wank", "Wara", "Achanchukya", "Bagrana", "Balloopura", "Baori", "Barh", "Baseri", "Basri", "Beer", "Beermalpura", "Begas", "Bhambhori", "Bhoodharpura", "Bichpari", "Boytawala", "Chak", "Champapura", "Charanwas", "Dhankya", "Dharampura", "Durjaniyawas", "Gajadharpura", "Govindpura", "Gurliya", "Hathod", "Himmatpura", "Jaibhawanipura", "Jaisinghpura", "Kalwar", "Kanarpura", "Kanwar", "Kapariyawas", "Keshyawala", "Kishorpura", "Lalchandpura", "Laxmipura", "Malpura", "Manchwa", "Manda", "Mansharampura", "Mansinghpura", "Mundiya", "Nandgaon", "Nari", "Natlalpura", "Neemera", "Niwaroo", "Pachar", "Peethawas", "Pindolai", "Ramla", "Ramsingh", "Roopa", "Sabrampura", "Sanchoti", "Sarang", "Sarna", "Shrirampura", "Shyosinghpura", "Sitapura", "Sumel", "Sundariyawas", "Vijaypura", "Achhojai", "Achrol", "Akeda", "Akedadoongar", "Akhepura", "Amer", "Ani", "Anoppura", "Atalbiharipura", "Badanpura", "Bagwada", "Ballupura", "Baragaon", "Barna", "Barsinghpura", "Bas", "Beelpura", "Benarwith", "Bhatton", "Bheelpura", "Bheevpura", "Bhoorawali", "Bhuranpura", "Biharipura", "Bilonchi", "Bishangarh", "Bishanpura", "Boodthal", "Bugalia", "Chandawas", "Chandrapura", "Chandwaji", "Chatarpura", "Chetawala", "Chhanwar", "Chhaprari", "Chimanpura", "Chirara", "Chittanukalan", "Chonp", "Dadar", "Dalpura", "Dattawata", "Daula", "Deeppura", "Degdas", "Deo", "Deogudha", "Dhand", "Dheengpur", "Disan", "Durga", "Dwarkapura", "Ghatwada", "Gudha", "Gunawata", "Hanumanpura", "Harchandpura", "Hardattpura", "Harwar", "Israwala", "Jagnnathpura", "Jahota", "Jaipur", "Jairampura", "Jaisalya", "Jaisingh", "Jaitpur", "Jaitpura", "Jalsoo", "Jiloi", "Jugalpura", "Kacherawala", "Kalighati", "Kalwad", "Kankrel", "Kant", "Kanwarpura", "Khannipura", "Khapariya", "Khatiyon", "Kherwari", "Khora", "Khorabeesal", "Khurad", "Kiratpura", "Kishanpura", "Kookas", "Labana", "Ladana", "Lakher", "Lalgarh", "Lamyamewal", "Laxminarayanpura", "Looniyawas", "Maheshwas", "Maila", "Mohanbari", "Mohanpura", "Mori", "Mothoo", "Mukandpura", "Mundota", "Nagal", "Nakawala", "Nangal", "Nara", "Naradpura", "Nestiwas", "Patti", "Peelwa", "Pokharawala", "Pragpura", "Pratappura", "Punana", "Puth", "Radha", "Radhakishanpura", "Radhapura", "Raithal", "Raja", "Rajawas", "Rajpur", "Rajpurwas", "Ramgatta", "Ramlyawala", "Rampura", "Risani", "Rojda", "Roondal", "Sahib", "Salarwas", "Sangawala", "Sar", "Sardarpura", "Seengwana", "Sewapura", "Sherawatpura", "Shisiyawas", "Shri", "Shripura", "Shubhrampura", "Sindolai", "Sirohi", "Sirsali", "Sirsi", "Sudarshanpura", "Sundarpura", "Sunder", "Syari", "Tadawas", "Tatiyawas", "Udaipuriya", "Vijaipura", "Yadav", "Yadavkhera","Ambaliyara", "Ambareli", "Ambethi", "Anandpura", "Andhari", "Arnej", "Badarkha", "Begva", "Bhetawada", "Bholad", "Bhumli", "Bhurkhi", "Chaloda", "Chandisar", "Dadusar", "Dholi", "Dholka", "Ganesar", "Ganol", "Girand", "Gundi", "Ingoli", "Jakhda", "Jalalpur", "Javaraj", "Kadipur", "Kaliyapura", "Kalyanpur", "Kariyana", "Kauka", "Kesargadh", "Khanpur", "Kharanti", "Khatripur", "Koth", "Lana", "Loliya", "Maflipur", "Moti", "Mujpur", "Nani", "Nesda", "Paldi", "Pisawada", "Rajpur", "Rampur", "Rampura", "Ranoda", "Raypur", "Rupgadh", "Sahij", "Samani", "Saragvala", "Sarandi", "Saroda", "Sathal", "Shekhdi", "Shiyawada", "Simej", "Sindhraj", "Transad", "Uteliya", "Valthera", "Varna", "Vasna", "Vataman", "Vautha", "Vejalka", "Virdi", "Virpur", "Agariya", "Amuli", "Babariyadhar", "Balapar", "Barbatana", "Barpatoli", "Bhachadar", "Bhakshi", "Bherai", "Chanch", "Charodiya", "Chhapri", "Chhatadiya", "Chotra", "Dantardi", "Devka", "Dharano", "Dhareshvar", "Dipadiya", "Doliya", "Dungar", "Dungarparda", "Ganjavadar", "Hadmatiya", "Hindorna", "Jholapar", "Kadiyali", "Katar", "Kathivadar", "Khakhbai", "Khambhaliya", "Khari", "khera", "Kherali", "Kotdi", "Kovaya", "Kumbhariya", "Kundaliyala", "Majadar", "Mandal", "Mandardi", "Masundada", "Mobhiyana", "Morangi", "Navagam", "Nesdi", "Ningala", "Patva", "Pipavav", "Rabhda", "Rajparda", "Rajula", "Rampara", "Ringaniyala", "Sajanavav", "Samadhiyala", "Uchaiya", "Untiya", "Vad", "Vadli", "Vavdi", "Vavera", "Victar", "Visaliya", "Zampodar", "Zanzarda", "Zinzka", "Akteshwar", "Akuvada", "Amadla", "Amarpara", "Amletha", "Amli", "Anodara", "Bakhar", "Baman", "Bhacharvada", "Bhadam", "Bhanadra", "Bhekhadia", "Bhilvashi", "Bhuchhad", "Bhumalia", "Bilthana", "Bitada", "Boria", "Boridra", "Borutar", "Chapat", "Chhatawada", "Chhindiapara", "Chichadia", "Chitravadi", "Chitrol", "Dadhvada", "Datanambali", "Dhamadra", "Dhamnacha", "Dhaniala", "Dhanpor", "Dharikheda", "Dhefa", "Dhirkhadi", "Dhobisal", "Dhochki", "Dholar", "Dholivav", "Fulvadi", "Gabhana", "Gadher", "Gadit", "Gadkoi", "Gadod", "Gagar", "Galupura", "Gambhirpara", "Gamkuva", "Garudeshwar", "Ghanta", "Gopalpura", "Gora", "Gulvani", "Gunetha", "Guvar", "Hajarpara", "Handi", "Haripura", "Helambi", "Indravarna", "Jesalpor", "Jetpor", "Jior", "Jitgadh", "Jitnagar", "Junaraj", "Junvad", "Kadavamahuda", "Kakadva", "Kali", "Kamodiya", "Kandroj", "Kanpor", "Karantha", "Kareli", "Kevadiya", "Khadagada", "Khalvani", "Khamar", "Khojalvasa", "Khunta", "Kothara", "Kothi", "Kumasgam", "Kumbhia", "Lachhras", "Limdi", "Limkhetar", "Lodhan", "Mahudipada", "Mandan", "Mangrol", "Mankad", "Mankuva", "Mayasi", "Medgam", "Mithivav", "Moji", "Mokhdi", "Mota", "Movi", "Naghatpor", "Namalgadh", "Nana", "Narkhadi", "Nasri", "Nava", "Navapara", "Navra", "Nikoli", "Ori", "Orpa", "Palsi", "Pan", "Panchla", "Panisadadia", "Pati", "Patna", "Pinchhipara", "Poicha", "Pratapnagar", "Pratappara", "Rajpipla", "Rajuvadia", "Ramgadh", "Ranipura", "Rasela", "Rel", "Ringni", "Rundh", "Sajanpara", "Sakva", "Samaria", "Samasherpura", "Sandhia", "Sanjroli", "Sengpara", "Serav", "Sisodara", "Sondhaliya", "Songam", "Suka", "Sundarpura", "Surajvad", "Surpan", "Survani", "Tankari", "Taropa", "Thari", "Thavadia", "Timbi", "Timrava", "Torna", "Umarva", "Undva", "Vadi", "Vadia", "Vagadia", "Vaghetha", "Vaghodia", "Vaghrali", "Valpor", "Vanazi", "Vandaria", "Vansla", "Vanzar", "Vanznitad", "Varachha", "Varkhad", "Vasantpara", "Vaviala", "Velchhandi", "Verisalpara", "Virpor", "Virsangpura", "Zaria", "Zarvani"],

    "4villages" : ["Amahinota", "Andhuwa", "Atha", "Badhaiya", "Bahdan", "Bahoripar", "Balhwara", "Bamhani", "Bamhnoda", "Bamuraha", "Bandar", "Barbati", "Barela", "Bareli", "Bargi", "Barha", "Basaniya", "Basanpani", "Basha", "Beragi", "Bhatauli", "Bhedaghat", "Bijapuri", "Bijora", "Bilgada", "Binjha", "Chandeli", "Chanderi", "Chargawan", "Charghat", "Charguwan", "Chaukhada", "Chhapara", "Chhattarpur", "Chhitapar", "Chhiwlaha", "Chourai", "Churiya", "Dagdagouwa", "Deodwar", "Deori", "Dhabai", "Dhanpuri", "Dhoda", "Diya", "Dugariya", "Dundai", "Dungariya", "Gadarkheda", "Gagha", "Gajna", "Gangdha", "GCF", "Ghaghra", "Ghana", "Ghat", "Ghughari", "Ghunsor", "Ghutiya", "Gokalpur", "Harduli", "Harrai", "Hinota", "Hinotiya", "Hulki", "Indra", "Jabalpur", "Jamtara", "Jamuniya", "Jhiri", "Jogidhana", "Jotpur", "Junwani", "Kailwas", "Kaladehi", "Kalgodi", "Kareli", "Kashi", "Kathotiya", "Khamhariya", "Khapa", "Khari", "Khirhani", "Khmariya", "Khursi", "Kohani", "Kosamghat", "Kuda", "Kudari", "Kugawan", "Kukuri", "Kumhi", "Lahagi", "Lamheti", "Lamti", "Lodhi", "Magardha", "Mahgaon", "Mahgawan", "Malara", "Manegaon", "Mangela", "Mangeli", "Mankedi", "Marha", "Medki", "Mohaniya", "Mohas", "Mothar", "Mukanwara", "Nanhakheda", "Narayanpur", "Narrai", "Nayagaon", "Neem", "Nigri", "OF", "Padariya", "Paduwa", "Padwar", "Pahadi", "Para", "Parasiya", "Paraswara", "Partala", "Patpara", "Pidrai", "Pindrai", "Pipariya", "Purwa", "Raipura", "Rampur", "Rengajhori", "Rewa", "Richhai", "Ronsra", "Sagda", "Salaiya", "Saliwada", "Saliwara", "Samad", "Samnapur", "Sarora", "Sarrai", "Sehora", "Seoni", "Shahajpuri", "Sihora", "Silgaur", "Silpuri", "Siluwa", "Sohad", "Sukari", "Sukhalalpur", "Temar", "Tewar", "Thana", "Tigan", "Tighra", "Tikariya", "Tikhari", "Tilhari", "Tinsa", "Tinsi", "Tuniya", "Umariya", "Vikrampur", "Villhari", "Ahirkhedi", "Ambamolya", "Ankya", "Arandia", "Aranya", "Asakhedi", "Asrawad", "Badia", "Balya", "Bangarda", "Bank", "Baroda", "Bawalya", "Begam", "Berchha", "Bhangarh", "Bhicholi", "Bhingaria", "Bhokhakhedi", "Bihdia", "Bilawali", "Bisan", "Bisanawada", "Burana", "Chauhan", "Chhitkana", "Chikatiya", "Dandala", "Dehri", "Deoguradia", "Dhamnay", "Dharnawad", "Dhaturia", "Dhulet", "Digwal", "Dudhia", "Fatan", "Garipipalya", "Garya", "Gehli", "Ghudia", "Goga", "Hashakhedi", "Higonya", "Hukmakhedi", "Indore", "Jagmalpipalya", "Jalod", "Jamaniya", "Jamnya", "Jani", "Jhalaria", "Kacharod", "Kajipalasiya", "Kaku", "Kalaria", "Kalod", "Kampel", "Kanadia", "Kapalya", "Kevadia", "Khandel", "Kharadia", "Khatipiplya", "Khatri", "Khemana", "Khudel", "Kordia", "Lasudiya", "Limbodi", "Machla", "Mali", "Maya", "Mirjapur", "Moklai", "Morod", "Morodhat", "Muhadi", "Mundal", "Mundi", "Mundla", "Nahar", "Nainod", "Narlai", "Nawda", "Nayapura", "Nehru", "Nignoti", "Nihalpur", "Nipanya", "Palda", "Panjarya", "Panod", "Pedmi", "Phali", "Pipalda", "Piplya", "Piwday", "Rajdhara", "Ralamandal", "Ramgarh", "Ramu", "Rangwasa", "Rau", "Rinjlai", "Sahu", "Sanawadia", "Sanawalya", "Sarolia", "Semalya", "Shahdadeo", "Shakkar", "Shiwni", "Shri", "Sindhi", "Sindoda", "Sindodi", "Sinhasa", "Songuradiya", "Sonway", "Sukhniwas", "Talawali", "Tigaria", "Tillor", "Tinchha", "Ujjaini", "Umaria", "Umri", "Undal", "Upadinatha","Abit", "Agar", "Agastinagar", "Akola", "Ambad", "Ambevangan", "Ambhol", "Ambikanagar", "Ambit", "Aurangpur", "Babhul", "Badgi", "Bahirwadi", "Balthan", "Baravwadi", "Bari", "Belapur", "Bhandardara", "Bhojadarawadi", "Bholewadi", "Bitaka", "Bori", "Bramhanwada", "Chaitanyapur", "Chand", "Chandgirwadi", "Chas", "Chichondi", "Chinchavane", "Chital", "Dagadwadi", "Deogaon", "Deothan", "Dhagewadi", "Dhamangaon", "Dhamangaon", "Dhamanvan", "Dhokri", "Dhumalwadi", "Digambar", "Dongargaon", "Dongarwadi", "Ekdare", "Esarthav", "Ganore", "Gardani", "Garwadi", "Ghatghar", "Ghodsarwadi", "Ghoti", "Godewadi", "Gondoshi", "Guhire", "Hivargaon", "Induri", "Jachakwadi", "Jahagirdarwadi", "Jambhale", "Jamgaon", "Jaynawadi", "Kalamb", "Kalas", "Kalewadi", "Karandi", "Katalapur", "Kauthewadi", "Keli", "Kelungan", "Khadki", "Khanapur", "Khetewadi", "Khirvire", "Khuntewadi", "Kodni", "Kohane", "Kohondi", "Kokanwadi", "Koltembhe", "Kombhalne", "Kothale", "Kotul", "Kumbhefal", "Kumshet", "Ladgaon", "Lahit", "Lavhali", "Lingdev", "Mahadeowadi", "Malegaon", "Manhere", "Manik", "Manoharpur", "Manyale", "Maveshi", "Mehenduri", "Mhaladevi", "Mhalungi", "Mogras", "Morwadi", "Murshet", "Muthalane", "Mutkhel", "Nachanthav", "Nagawadi", "Navalewadi", "Nilwande", "Nimbral", "Nirgudwadi", "Pabhulwandi", "Pachanai", "Pachapattawadi", "Padalane", "Padoshi", "Paithan", "Palsunde", "Pangari", "Panjare", "Parakhatpur", "Pedhewadi", "Pendshet", "Phophasandi", "Pimpaldarawadi", "Pimpaldari", "Pimpalgaon", "Pimparkane", "Pimpri", "Pisewadi", "Poparewadi", "Purushawadi", "Rajur", "Ranad", "Ratanwadi", "Rede", "Rumbhodi", "Sakirwadi", "Samrad", "Samsherpur", "Sangavi", "Sarowar", "Satewadi", "Savarkute", "Sawargaonpat", "Senit", "Shelad", "Shelvihire", "Shendi", "Shenit", "Sherankhel", "Sherewadi", "Shidawad", "Shilvandi", "Shinde", "Shinganwadi", "Shirpunje", "Shiswad", "Shivajinagar", "Somalwadi", "Sugaon", "Sultanpur", "Tahakari", "Takali", "Tale", "Tambhol", "Terungan", "Thakarwadi", "Tirdhe", "Titavi", "Udadawane", "Umbarwadi", "Unchkhadak", "Vashere", "Vihir", "Virgaon", "Vithe", "Wagdari", "Waghapur", "Waki", "Wanjulshet", "Waranghushi", "Anchalgaon", "Anjanapur", "Apegaon", "Bahadarbad", "Bahadarpur", "Baktarpur", "Bhojade", "Bolaki", "Bramhangaon", "Chande", "Chandgavhan", "Dahigaon", "Dauch", "Derde", "Dhamori", "Dharangaon", "Dhondewadi", "Dhotre", "Ghari", "Ghoyegaon", "Godhegaon", "Handewadi", "Hingani", "Javalke", "Jeur", "Kakadi", "Kanhegaon", "Karanji", "Karwadi", "Kasali", "Khirdi", "Khopadi", "Kokamthan", "Kolgaon", "Kolpewadi", "Kopargaon", "Kumbhari", "Louki", "Madhi", "Mahegaon", "Malharwadi", "Manegaon", "Manjur", "Maygaon", "Morvis", "Murshatpur", "Nategaon", "Ogadi", "Padhegaon", "Pohegaon", "Ranjangaon", "Rawande", "Sade", "Samvatsar", "Sangvi", "Sawalgaon", "Shahajapur", "Shahapur", "Shirasgaon", "Singnapur", "Sonari", "Sonewadi", "Soyegaon", "Suregaon", "Talegaon", "Tilwani", "Ukkadgaon", "Vadgaon", "Velapur", "Ves", "Wari", "Yesgaon", "Amalner", "Antarwali", "Babhulkhede", "Babhulwedhe", "Baku", "Barhanpur", "Belhekarwadi", "Belpandhari", "Belpimpalgaon", "Bhalgaon", "Bhanashiware", "Bhende", "Borgaon", "Chanda", "Chilekhanwadi", "Chinchban", "Dedgaon", "Deosade", "Dhangarwadi", "Dighi", "Fattepur", "Galnimb", "Ganeshwadi", "Georai", "Ghodegaon", "Ghogargaon", "Gidegaon", "Gogalgaon", "Gomalwadi", "Gondegaon", "Gonegaon", "Gopalpur", "Goyegavhan", "Handi", "Hingoni", "Imampur", "Jainpur", "Jalke", "Jayagude", "Kangoni", "Karajgaon", "Karegaon", "Kautha", "Khadke", "Khalal", "Khamgaon", "Kharwandi", "Khedle", "Khunegaon", "Khupti", "Kukana", "Landewadi", "Lekurwali", "Loharwadi", "Lohgaon", "Madki", "Mahalaxmi", "Maka", "Maktapur", "Malewadi", "Malichinchora", "Mandegavhan", "Manglapur", "Mhalapur", "Mhalas", "Mhasale", "Morgavhan", "Moryachinchore", "Mukindpur", "Murme", "Nagapur", "Najik", "Nandur", "Narayanwadi", "Nevasa", "Nimbhari", "Nipani", "Pachegaon", "Pachunde", "Panaswadi", "Panegaon", "Patharwale", "Pichadgaon", "Pravara", "Punatgaon", "Rajegaon", "Ramdoh", "Rastapur", "Salabatpur", "Shinganapur", "Shingve", "Siregaon", "Sonai", "Soundala", "Sukali", "Tamaswadi", "Tarwadi", "Telkudgaon", "Toka", "Usthal", "Wadula", "Wadule", "Wakadi", "Wanjarwadi", "Wanjoli", "Warkhed", "Washim", "Watapur", "Zapwadi", "Adgaon", "Agaskhed", "Akoli", "Akolkhed", "Akot", "Alampur", "Alegaon", "Alewadi", "Alyarpur", "Ambadi", "Amboda", "Aminapur", "Andh", "Asegaon", "Aurangabad", "Balegaon", "Bambarda", "Bandhara", "Belura", "Bhilkhed", "Bhod", "Bochara", "Bordi", "Chandanpur", "Chandikapur", "Chapaner", "Chinchkhed", "Chinchpani", "Chohatta", "Chorwad", "Dahikhel", "Dangarkhed", "Danori", "Dautpur", "Deori", "Deulgaon", "Dewarda", "Dhaga", "Dhamna", "Dharel", "Dinoda", "Diwthana", "Edlapur", "Gajipur", "Garsoli", "Gaulkhed", "Girjapur", "Gokhi", "Gyajuddin", "Hanwadi", "Hilalabad", "Isapur", "Jalgaon", "Januna", "Jaulka", "Jaulkhed", "Jitapur", "Jogban", "Kalwadi", "Kanheri", "Kapashi", "Karatwadi", "Karodi", "Kasod", "Katkhed", "Kavtha", "Kawasa", "Keliweli", "Kesori", "Khairkhed", "Khaparwadi", "Khasbag", "Kherda", "Khirkund", "Khudawantpur", "Kinkhed", "Koha", "Kolwihir", "Kund", "Kutasa", "Ladegaon", "Lakhamapur", "Lamkani", "Lohari", "Lotkhed", "Mahagaon", "Mahamadpur", "Makrampur", "Malkapur", "Manchanpur", "Mankari", "Mardi", "Maroda", "Mirzapur", "Miyache", "Mohala", "Mundgaon", "Nakhegaon", "Nandkhed", "Narsingpur", "Naynapur", "Nehori", "Nijampur", "Palsod", "Panaj", "Parala", "Patonda", "Patsul", "Penori", "Pilakwadi", "Popatkhed", "Punda", "Rahnapur", "Rajura", "Rajurwadi", "Ramapur", "Rambhapur", "Raundala", "Rel", "Rohankhed", "Rudhadi", "Ruikhed", "Salkhed", "Sarfabad", "Sawara", "Sawargaon", "Sawarkhed", "Shahanur", "Sonbardi", "Tajnapur", "Takli", "Tandulwadi", "Taroda", "Thokbardi", "Umara", "Vitali", "Wadali", "Wadgaon", "Waghoda", "Wai", "Wani", "Warula", "Warur", "Wasali", "Adivare", "Aghane", "Ahupe", "Amade", "Ambedara", "Ambegaon", "Amondi", "Apati", "Asane", "Awasari", "Bhagadi", "Bharadi", "Bhawadi", "Bhorwadi", "Borghar", "Chandoli", "Chaptewadi", "Chikhali", "Chinchodi", "Chincholi", "Devgaon", "Dhakale", "Dhamani", "Dhondmal", "Digad", "Dimbhe", "Don", "Eklahare", "Falakewadi", "Gadewadi", "Gangapur", "Gavdewadi", "Gawarwadi", "Girawali", "Gohe", "Jadhavwadi", "Jambhori", "Jarkarwadi", "Jawale", "Kadewadi", "Kalambai", "Kanase", "Kathapur", "Khadakamala", "Khadaki", "Khadakwadi", "Koldara", "Kolharwadi", "Koltavade", "Kolwadi", "Kondhare", "Kondhaval", "Kurwandi", "Kushire", "Lakhangaon", "Lauki", "Loni", "Magholi", "Mahalunge", "Malawadi", "Malin", "Manchar", "Mapoli", "Mengadewadi", "Menubarwadi", "Mondalewadi", "Mordewadi", "Nanavade", "Nandurkichi", "Narodi", "Nhaved", "Nigdale", "Nighutwadi", "Nirgoodsar", "Pahaddara", "Panchale", "Pargaon", "Patan", "Peth", "Phaladewadi", "Phalode", "Phulvade", "Pimpargane", "Pimpari", "Pinglewadi", "Pokhari", "Pokharkarwadi", "Pondewadi", "Rajewadi", "Rajpur", "Ramwadi", "Ranjani", "Ranmala", "Sakeri", "Sakore", "Sal", "Savarli", "Shewalwadi", "Shindemala", "Shingave", "Shinoli", "Shirdale", "Shriramnagar", "Supedhar", "Takewadi", "Talekar", "Tamblemala", "Tavharewadi", "Thakar", "Thorandale", "Thugaon", "Tirpad", "Vachalmala", "Vachape", "Valati", "Varasawane", "Vitthalwadi", "Walunjwadi", "Arvi", "Ashtapur", "Autadwadi", "Awasare", "Awhalwadi", "Bahuli", "Bakori", "Bhagatwadi", "Bhawarapur", "Bhilarewadi", "Biwari", "Burkegaon", "Dehu", "Dhayari", "Donaje", "Fulgaon", "Fursungi", "Gaud", "Gawdewadi", "Ghera", "Gogalwadi", "Gorhe", "Gujar", "Hadapsar", "Hingangaon", "Holkarwadi", "Jambhali", "Jambhulwadi", "Kadamwak", "Kalyan", "Kesnand", "Khadakwasala", "Khadewadi", "Khed", "Kirkitwadi", "Kolewadi", "Kondave", "Kondhanpur", "Kopare", "Koregaon", "Kudaje", "Kunjirwadi", "Adaka", "Ajani", "Asalwada", "Asoli.", "Avandhi", "Babulkheda", "Bhamewada", "Bhilgaon", "Bhowari", "Bhugaon", "Bidbina", "Bidgaon.", "Bina", "Chicholi", "Chikna", "Dhargaon", "Dighori", "Gada", "Garla", "Ghorpad", "Gumthala", "Gumthi", "Jakhegaon", "Kadoli.", "Kawtha", "Kem", "Khairy", "Khapa", "Khaparkheda", "Khasala", "Khedi", "Koradi", "Kusumbi", "Lihigaon", "Lonkhairi", "Mahadula", "Mahalgaon", "Mangali", "Mhasala", "Nanda", "Nanha", "Nerala", "Neri", "Nimbha", "Ninhai", "Palsad", "Pandherkawada", "Pandhurna", "Panjara", "Parsodi", "Pawangaon", "Powari", "Ranala", "Ranmangali", "Sawali", "Selu", "Shirpur", "Shivani", "Sonegaon", "Suradevi", "Tandulwani", "Tarodi", "Temsana", "Umari", "Undgaon", "Wadoda", "Warambha", "Waregaon", "Yekardi", "Yerkheda", "Zharap", "Ajanti", "Ajepur", "Balapur", "Bangaon", "Bavhala", "Bhalki", "Bharad", "Bhawarkhed", "Chikani", "Chinchgaon", "Dagad", "Dahifal", "Dawargaon", "Dhanaj", "Dodki", "Domga", "Donad", "Fattapur", "Gaulan", "Ghareful", "Ghui", "Gondgavhan", "Hirapur", "Indira", "Indrathana", "Injapur", "Jawalgaon", "Kamandev", "Kanhergaon", "Kapshi", "Karkheda", "Khalana", "Khandala", "Kharadgaon", "Kharbi", "Kholapuri", "Khutafali", "Kohala", "Kolura", "Kurhegaon", "Lankanath", "Linga", "Lohatwadi", "Lonadi", "Mahajanpur", "Malkhed", "Mandawgad", "Mangladevi", "Mangrul", "Manikwada", "Marwadi", "Mirapur", "Mozar", "Muktyapur", "Nathrad", "Ner", "Pachwad", "Pandhari", "Parjana", "Pathrad", "Pendhara", "Raipur", "Ramgaon", "Ratnapur", "Renkapur", "Sankhas", "Sarangpur", "Sarata", "Satefal", "Sawanga", "Shabaspur", "Shendri", "Shirajgaon", "Sidhakpur", "Sindkhed", "Sonkhas", "Sonwadhona", "Tembhi", "Udapur", "Umartha", "Umarvihir", "Uttarwadhona", "Vijvihir", "Vyahali", "Walki", "Wanarkhed", "Watfala", "Watfali", "Wirgavhan", "Zombadi", "Amshet", "Antargaon", "Bagapur", "Bagwadi", "Banayat", "Barbadi", "Bhandegaon", "Bhileshwar", "Bhopapur", "Bhulai", "Bijora", "Bodegaon", "Bodhgavhan", "Both", "Bramhanath", "Bramhi", "Chani", "Chopadi", "Chorkhopadi", "Chorodi", "Daheli", "Darwha", "Daryapur", "Deogiri", "Deurwadi", "Dhawalsar", "Dhulapur", "Dob", "Dolhari", "Dudhgaon", "Fubgaon", "Ganeshpur", "Gaulpend", "Ghanapur", "Ghatkinhi", "Goregaon", "Hanumannagar", "Haru", "Hatgaon", "Hatni", "Hatola", "Husanapur", "Irthal", "Ishrampur", "Jambhora", "Jawala", "Kamtwada", "Kanzara", "Karjagaon", "Karmala", "Khopdi", "Kinhiwalgi", "Kolwai", "Kumbharkinhi", "Kurhad", "Ladkhed", "Lakhkhind", "Lalapur", "Lingbori", "Lohi", "Mahatoli", "Mahmdpur", "Mahuli", "Mangala", "Mangkinhi", "Manki", "Mankopra", "Mundhal", "Naigaon", "Nandgavhan", "Nilona", "Nimbhala", "Palashi", "Palodi", "Pekarda", "Pimpalkhuta", "Rajivnagar", "Bhoj", "Bohonoli", "Burdul", "Chamtoli", "Chandap", "Chargaon", "Chinchavali", "Devaloli", "Dhavale", "Dhoke", "Done", "Gorpe", "Indgaon", "Jambhilghar", "Kakadwal", "Kakole", "Kanhor", "Karand", "Karav", "Karavale", "Kasgaon", "Kharad", "Khuntavali", "Kudsavare", "Kumbharli", "Kushivali", "Babhalgaon", "Bamni", "Baswantpur", "Bhadgaon", "Bhadi", "Bhatangali", "Bhatkheda", "Bhosa", "Bhoyara", "Bhuisamudraga", "Bindgihal", "Bodkha", "Bokangaon", "Bopala", "Borwati", "Chandeshwar", "Chata", "Chikhal", "Chikhurda"],
    
    "5villages" : ["Adiwarpet", "Akkapalle", "Amudalpalle", "Angarajpalle", "Asnad", "Beervelli", "Bhamraopet", "Buddaram", "Chakepalle", "Chennur", "Chintapalle", "Dugnepalle", "Gangaram", "Guddirampur", "Kachanpalle", "Kannepalle", "Kathersala", "Khambojipet", "Kistampet", "Kommera", "Konampet", "Lingampalle", "Nagapur", "Narasakkapet", "Narayanpur", "Pokkur", "Ponnaram", "Raipet", "Sankaram", "Shivalingapur", "Somanpalle", "Suddal", "Sundersala", "Yellakkapet", "Anji", "Bursanpatar", "Dasnapur", "Devapur", "Dhannura", "Dharmasagar", "Dodanda", "Dongargaon", "Gattepalle", "Ginnera", "Goureepur", "Harkapur", "Heerapur", "Indervelly", "Keslaguda", "Keslapur", "Kondapur", "Lachimpur", "Lakampur", "Mallapur", "Mamidiguda", "Mendapalle", "Muthnur", "Pipri", "Pochampalle", "Rampur", "Tejapur", "Wadagaon", "Waipet", "Walganda", "Yamaikunta", "Alamuru", "Anantapur", "Chiyyedu", "Gollapalle", "Itikalapalle", "Jangalapalle", "Kakkalapalle", "Kamarupalle", "Kandakur", "Katiganikalva", "Kodimi", "Kurugunta", "Mannila", "Narayanapuram", "Papampeta", "Rachanapalle", "Sajjalakalva", "Somanadoddi", "Thaticherla", "Upparapalle", "Anandapuram", "Chinthalapeta", "Chinthapallipeta", "Chodavaram", "Damarasingi", "Devunikanapaka", "Garida", "Garikavalasa", "Golagam", "Gorlapeta", "Goshada", "Gudem", "Gujjangivalasa", "Gurla", "Jammu", "Kalavacherla", "Kella", "Kondagandredu", "Kotagandredu", "Lavidam", "Manyapuripeta", "Meesalapeta", "Nadupuru", "Nagallavalasa", "Nakkalapeta", "Nallacheruvu", "Pakeerukittali", "Palavalasa", "Palligantredu", "Pedabantupalle", "Penubharthi", "Polayavalasa", "Ragolu", "Sadanandapuram", "Solipisomarajupeta", "Thathavarikittali", "Thatipudi", "Thettangi", "Vallapuram", "Adavisangapur", "Aheri", "Ainapur", "Alaginal", "Aliyabad", "Ankalagi", "Arakeri", "Arjunagi", "Atalatti", "Babalad", "Babaleshwar", "Babanagar", "Baratagi", "Basavanagar", "Bellubbi", "Bijapur", "Bijjaragi", "Bolachikkalaki", "Bommanalli", "Buranpur", "Chikka", "Chintamaninagar", "Dadamatti", "Dasyal", "Devara", "Dhanaragi", "Dhanyal", "Domanal", "Dudihal", "Dyaberi", "Gonasagi", "Gugadaddi", "Gunadal", "Gunaki", "Hadagali", "Halagani", "Hanchinal", "Hangaragi", "Hanumasagar", "Harnal", "Hebbalahatti", "Hegadihal", "Hittinahalli", "Hokkundi", "Honaganahalli", "Honawad", "Honnalli", "Honnutagi", "Hosur", "Hubanur", "Hunsyal", "Indiranagar", "Inganal", "Itangihal", "Jainapur", "Jalageri", "Jambagi", "Jumnal", "Kaggod", "Kakanagiri", "Kakhandaki", "Kallakavatagi", "Kambagi", "Kanabur", "Kanamadi", "Kanamuchanal", "Kannal", "Kannur", "Karjol", "Katakanahalli", "Katral", "Kaulagi", "Kengalagutti", "Khatijapur", "Kodabagi", "Kotyal", "Kumatagi", "Kumathe", "Lalbahadur", "Lingadalli", "Lohagaon", "Madagunaki", "Madasanal", "Madhabhavi", "Mahal", "Mahatmagandhinagar", "Makanapur", "Malakandevarahatti", "Mamadapur", "Mangalur", "Minchinal", "Nagaral", "Nagathan", "Nandyal", "Narasimhanagar", "Navarasapur", "Nidoni", "Rajajinagar", "Rambhapur", "Ramnagar", "Ratnapura", "Sangapur", "Sarawad", "Savanalli", "Sevalalnagar", "Shegunashi", "Shirabur", "Shirnal", "Shivanagi", "Siddapur", "Siddapura", "Somadevarahatti", "Sutagundi", "Tajapur", "Takkalaki", "Tidagundi", "Tiganibidare", "Tikota", "Tonsyal", "Toravi", "Ukumanal", "Uppala", "Utnal", "Yakkundi", "Yatnal", "Abbanakuppe", "Achalu", "Akkur", "Alamaradoddi", "Allalasandra", "Ammanapura", "Ankanahalli", "Annahalli", "Anumanahalli", "Archikarahalli", "Arehalli", "Avaragere", "Balaguli", "Baleveeranahalli", "Banandur", "Bannigiri", "Bannikuppe", "Basavanapura", "Bennahalli", "Bethimgere", "Bhimenahalli", "Bidadi", "Bilagumba", "Billakempanahalli", "Bolappanahalli", "Bommachanahalli", "Borehalli", "Bychohalli", "Byragi", "Byramangala", "Chamanahalli", "Channamanahalli", "Chikkagangawadi", "Chikkakuntanahalli", "Chikkamannugudde", "Chikkasulikere", "Chikkenahalli", "Chowdeshwarihalli", "Danaikanapura", "Dasarahalli", "Dharapura", "Doddagangawadi", "Doddakuntanahalli", "Doddamannugudde", "Doddasulikere", "Ganakallu", "Gopahalli", "Hagalahalli", "Hakkipikki", "Hallimala", "Handigundi", "Harisandra", "Hebbakodi", "Heggadagere", "Hejjala", "Hirehalli", "Hosadoddi", "Hulikeregunnur", "Hulthar", "Hunasanahalli", "Ibbalakahalli", "Ijoor", "Ittamadu", "Ivagilu", "Jakkanahalli", "Jalamangala", "Jeeganahalli", "Kakaramanahalli", "Kallugopahalli", "Kanchugaranahalli", "Kavanapura", "Kempadyapanahalli", "Kempaiahnapalya", "Kempanahalli", "Kempavaderahalli", "Kenchanakuppe", "Kenjigarahalli", "Keshavapura", "Kethiganahalli", "Kethohalli", "Kodiyala", "Kolamaranakuppe", "Kotahalli", "Kothipura", "Kumbalagudu", "Kumbapura", "Kunagal", "Kurubara", "Kurubarahalli", "Kutagal", "Kutharabavi", "Kyasapura", "Kylancha", "Lakkappanahalli", "Lakkasandra", "Lakkojanahalli", "Lakshmipura", "Lakshmisagara", "Madapura", "Madigarapalya", "Manchanayakanahalli", "Manchegowdanapalya", "Mandalahalli", "Mayaganahalli", "Melehalli", "Muddapura", "Nagohalli", "Nelamale", "Ramanagara", "Ramanahalli", "Seshagirihalli", "Shanubhoganahalli", "Shanumangala", "Shivanahalli", "Siddalakallu", "Subkere", "Sugganahalli", "Tadikavagilu", "Talakuppe", "Thalawadi", "Thammanayakanahalli", "Thenginakallu", "Uragahalli", "Vajarahalli", "Vibhuthikere", "Virupasandra", "Voddaradoddi", "Voderahalli", "Yerehalli", "Yerepalya", "Achola", "Alipur", "Anpur", "Anur", "Arkera", "Ashinal", "Ashoknagar", "Azalapur", "Bachwar", "Badepalli", "Badiyal", "Bagalmadu", "Balajinagar", "Balched", "Balichakkar", "Bandhalli", "Baswanthpur", "Belgera", "Belgunda", "Bettadhalli", "Bhimenhalli", "Bhimnagar", "Bomraldoddi", "Bomshathalli", "Borabanda", "Budur", "Chaler", "Chamenhalli", "Chandapur", "Chanderki", "Chapetla", "Chinakhar", "Chintenpalli", "Chintkunta", "Dadal", "Dantapur", "Dastrabad", "Devanalli", "Devarahalli", "Dharmapur", "Duppalli", "Edlur", "Gajarkot", "Ghanpur", "Gondadgi", "Gopalpur", "Goudgera", "Gudalgunta", "Gudur", "Gunjunur", "Gurmatkal", "Gurnur", "Halgera", "Hattikuni", "Hedgimadra", "Heggangera", "Himalpur", "Holibet", "Hongera", "Horencha", "Jaigram", "Jawaharnagar", "Kadechur", "Kakalwar", "Kale", "Kamalanagar", "Kanchgarhalli", "Kandkur", "Kanekal", "Karengi", "Kasapanhalli", "Katgi", "Keshwar", "Khanapur", "Khanhalli", "Kilenkera", "Koilur", "Konkal", "Kotgera", "Koulur", "Kudlur", "Kuntimari", "Kurkumbal", "Kyathanhalli", "Lingera", "Madepalli", "Madhawar", "Magdampur", "Mailapur", "Malhar", "Maskehhalli", "Mavinhalli", "Mazra", "Minaspur", "Mitha", "Motenhalli", "Mudnal", "Munderga"],

    "6villages" : ["Adichanur", "Alagapuram", "Alvoy", "Amanakkanthondi", "Ammbappur", "Anaikudam", "Andimadam", "Angarayanallur", "Anikudichan", "Authukurichi", "Ayyur", "Cholamadevi", "Devamangalam", "Devanur", "Dharmasamudram", "Edaayankurichi", "Edanganni", "Edayar", "Elaiyur", "Elayaperumalnallur", "Eravangudy", "Govindaputhur", "Guruvalapparkovil", "Irugaiyur", "Jayankondam", "Kadambur", "Karaikurichi", "Kattagaram", "Kattathur", "Keelakudiyiruppu", "Keelanatham", "Kodalikaruppur", "Kodangudi", "Kodukkur", "Koovathur", "Kulothunganallur", "Kundaveli", "Kuvagam", "Madanathur", "Managethi", "Marudur", "Melur", "Mudukulam", "Muthuservamadam", "Naduvalur", "Nayaganaipriyal", "Olaiyur", "Pappakudi", "Parukkal", "Periakrishnapuram", "Periyavalayam", "Pilichikuzihi", "Pirancheri", "Pitchanur", "Rangiyam", "Sathambadi", "Silumbur", "Siluvaicheri", "Sooriyamanal", "Sripurandan", "Sriraman", "Sundaresapuram", "Suthamalli", "T.Palur", "T.Sholankurichi", "Thaluthalaimedu", "Thandalai", "Thanimarathukadu", "Thathanur", "Thenkatchiperumalnatham", "Thirukalappur", "Udayanatham", "Udayarpalayam", "Udayavarthiyanur", "Uliyankudi", "Ulkottai", "Ulliyankudi", "Valaikurichi", "Vanathirayampattinam", "Vangudi", "Varadarajanpettai", "Variyankaval", "Vembukudi", "Venmankondan", "Vethiyarvettu", "Vilandai", "Achamangalam", "Agaram", "Agasipalli", "Alapatti", "Appinayakkankottai", "Ariyanapalli", "Avalnatham", "Balanapalli", "Balekuli", "Balinayanapalli", "Bannihalli", "Bargur", "Bathimadugu", "Batlapalli", "Bayanapalli", "Beemandapalli", "Bellampalli", "Bellarapalli", "Billanakuppam", "Boganapalli", "Bommarasanapalli", "Budhimutlu", "Chaparthi", "Chendrapalli", "Chennasandiram", "Chikkapoovathi", "Chinmnamttarapalli.", "Chinnakothur", "Chinnathimminayanapalli", "Chowttahalli", "Dasigounipalli", "Dasiripalli", "Devarakundani", "Devasamudiram", "Doddaganama", "Ebbiri", "Edayarapalli", "Errahalli", "Ettipalli", "Ettipallitalav", "Gangaleri", "Gangamadugu", "Gollapalli", "Gooliam", "Gundalapatti", "Gunthapalli", "Guruvinayanapalli", "Guttur", "Helekrishnnapuram", "Helekundani", "Idipalli", "Ikondamkothapalli", "Jagadab", "Jagadevipalayam", "Junjupalli", "Kadavarapalli", "Kallukurikki", "Kammaampalli", "Karadihalli", "Kariyasagaramthalav", "Kasiruganapalli", "Kathinayanapalli", "Kathiripalli", "Katteri", "Kattiganapalli", "Kaveripattinam", "Kodipalli", "Kompalli", "Kondappanayakempalli", "Kondappanayanapalli", "Kondepalli", "Konganepalli", "Kothigutalapalli", "Kottur", "Krishnagiri", "Krishnappanayakkanpudur", "Kundarapalli", "Kuppachiparai", "Kurubarapalli", "Lakkabathalapalli", "Madepalli", "Maharajakadai", "Majethgollahalli", "Mallapadi", "Manavarnapalli", "Marachandiram", "Marichettihalli", "Marigampalli", "Mittahalli", "Modikuppam", "Mottur", "Nachikuppam", "Naduvanapalli", "Nallur", "Nandibanda", "Naralapalli", "Neralagiri", "Neralakotta", "Nirmalvadi", "Oddapalli", "Oppathavadi", "Orappam", "Paiyur", "Palepalle", "Pandikurikki", "Pannapalli", "Panneswaramadam", "Pasinayanapalli", "Peddatalapalli", "Peddathanapalli", "Periamuthu", "Polupalli", "Ponnappa", "Puligunta", "Puliyancheri", "Puram", "Ragimakanapalli", "Ragimanapalli", "Salinayanapalli", "Sembadamuthur", "Sigaralapalli", "Sigaramaganapalli", "Singiripalli", "Siranapalli", "Sokkadi", "Soolamalai", "Sulamalai", "Sundekuppam", "Talihalli", "Tankadikuppam", "Thalipalli", "Thandagoundarahalli", "Thatrahalli", "Thattatharai", "Theertham", "Thogarapalli", "Timmapuram", "Undiganatham", "Varatanapalli", "Velakalahalli", "Venkatapuram", "Veppanapalli", "Verupasandiram", "Adappadakki", "Alagamanagari", "Alagichippatti", "Alangulam", "Alavakkottai", "Allur", "Alpattaviduthi", "Ammanpatti", "Arasani", "Arasanur", "Cholapuram", "Cholavandan", "Gowripatti", "Idaikkattur", "Idaiyamelur", "Iluppaikkudi", "Kadambankulam", "Kadaneri", "Kalkulam", "Kallarathinipatti", "Kallurani", "Kandangipatti", "Kanjipatti", "Kanjiram", "Kanjirangal", "Kannariruppu", "Karungalakudi", "Kathappattu", "Kattanipatti", "Kayangulam", "Keelakottai", "Keelamangalam", "Kilapungudi", "Kilathari", "Kilkandani", "Kilpidavur", "Kodikadukadamboorani", "Kolanthi", "Kollankudi", "Kondagamperungarai", "Kootaravupatti", "Kottagudi", "Kottappatti", "Kovanur", "Kumarapatti", "Kuruthanivariendal", "Madaguppatti", "Malampatti", "Mallal", "Mangattendal", "Mangudi", "Mangulam", "Marakkathur", "Marandai", "Maraniusilangulam", "Marathur", "Mathukanmoi", "Mathur", "Melapungudi", "Melavaniyankudi", "Minnaranjanvelangulam", "Mongankanmoi", "Moovarkanmoi", "Mudikandan", "Mudikkaraipudukkulam", "Muthur", "Nadamangalam", "Nagarampatti", "Nallendal", "Nalukottai", "Namanur", "Nariyangudi", "Nattarasankottai", "Nedungulam", "Okkur", "Okkurpudur", "Oyyavandan", "Padamathur", "Paganeri", "Paiyaurpillaivayal", "Palkulam", "Pallivayal", "Panaiyur", "Panangadi", "Paruthikanmai", "Periakannanur", "Perungudi", "Pillur", "Pirandakulam", "Ponnakulam", "Poovali", "Pudukkilavachi", "Puduppatti", "Pulavanvayal", "Puliyankulam", "Purasadiudappu", "Purasapattiudayarendal", "Sakkur", "Salur", "Sedambal", "Sembanur", "Sembar", "Sendiudaiyanathapuram", "Sennalakudi", "Sethur", "Sevaoorani", "Silathagudi", "Silukkapatti", "Siramam", "Siriyur", "Sirukanaperi", "Sivaganga", "Somanathamangalam", "Sundaranadappu", "Surakkulam", "Tamarakki", "Thadiyamangalam", "Thamarakki", "Thiraniendal", "Tirumalaikkoneripatti", "Usilanendal", "Usilangulam", "Valanai", "Valuthani", "Vanniankudi", "Vannikkudi", "Vembankudi", "Vembathur", "Vettikulam", "Vittaneri", "Aralam", "Ayyankunnu", "Chavassery", "Cheruvanchery", "Chockli", "Dharmadom", "Eranholi", "Eruvatti", "Kadirur", "Kandamkunnu", "Kanichar", "Kannavam", "Keezhallur", "Keezhur", "Kelakam", "Kolavelloor", "Koloyad", "Koodali", "Koothuparamba", "Kottayam-Malabar", "Kottiyoor", "Manantheri", "Manathana", "Mangattidam", "Mattannur", "Mokeri", "Muzhakkunnu", "New", "Paduvilayi", "Panniyannur", "Panoor", "Pathiriyad", "Pattannur", "Pattiom", "Payam", "Peringathur", "Pinarayi", "Puthoor", "Sivapuram", "Thalassery", "Thillenkeri", "Tholambra", "Thrippangottur", "Vekkalam", "Vellarvelly", "Vilamana", "Alakode", "Alapadamba", "Cheleri", "Chengalai", "Chuzhali", "Eramam", "Eruvassy", "Irikkur", "Kalliad", "Kankole", "Karivellur", "Kayaralam", "Kolacherry", "Kooveri", "Kurumathur", "Kuttiattoor", "Kuttiyeri", "Kuttoor", "Malapattam", "Maniyoor", "Mayyil", "Nediyanga", "Nuchiyad", "Padiyoor", "Panniyoor", "Pariyaram", "Pattuvam", "Payyannur", "Payyavoor", "Peralam", "Peringome", "Perinthatta", "Pulingome", "Ramanthali", "Sreekandapuram", "Taliparamba", "Thimiri", "Thirumeni", "Vayakkara", "Vayathur", "Vellad", "Vellora"],

    "7villages" : ["Alubari", "Arya", "Badamtam", "Banockburn", "Barbatia", "Barnesbeg", "Bijanbari", "Bloomfield", "Chongtong", "Dangia", "Darjiling", "Ging", "Goke", "Happy", "Hatta", "Jhepi", "Kaijalia", "Kankibong", "Karmi", "Kolbong", "Lamagaon", "Lebong", "Liza", "Lodhama", "Majua", "Murmidong", "Namla", "Pandam", "Patliabas", "Pattabong", "Phubsering", "Rangli", "Relling", "Rimbick", "Rishihat", "Rungneet", "Samalbong", "Singalila", "Singbhumdera", "Singla", "Singtam", "Soom", "Sum", "Tukvar", "Ambeok", "Chichu", "Dalingkot", "Dalingma", "Eastnar", "Gorubathan", "Kumai", "Lehti", "Lower", "Mal", "Manabari", "Mo", "Nim", "Noam", "Pagrang", "Pankasari", "Pankhasari", "Paren", "Pashiting", "Paten", "Pogu", "Rango", "Rechila", "Ruka", "Sakam", "Samabiyong", "Samsing", "Thousum", "Today", "Turibari", "Upper", "Westnar", "Amarsing", "Atal", "Bairbhita", "Bara", "Barabhita", "Barajharu", "Batlabari", "Bauni", "Baunibhita", "Belgachi", "Bhakatram", "Bharatsing", "Bhelu", "Bhimram", "Bhujia", "Birsing", "Budhkaran", "Chhota", "Dakshin", "Dalkajhar", "Damdama", "Dayaram", "Deoanbhitar", "Deomani", "Dhakna", "Dhanibani", "Dhanibanir", "Dhemal", "Dumriguri", "Fakna", "Gaziram", "Geni", "Ghusuru", "Gram", "Grammani", "Hoda", "Huchaimallik", "Jamidarguri", "Jamidargurir", "Jhabar", "Kadma", "Kamala", "Kamalpur", "Ketugabur", "Kilaram", "Lakshman", "Lakshmaner", "Lalman", "Lohasing", "Mahasing", "Mangalsing", "Manjha", "Marapur", "Mayaram", "Mechi", "Minghara", "Mingharar", "Mir", "Mirjangler", "Mudir", "Nandalal", "Nehal", "Nimubhitar", "Nipania", "Omi", "Ord", "Panta", "Pashchim", "Pataram", "Putimari", "Raghuram", "Raghuramer", "Rajajhar", "Rangapani", "Ranidanga", "Rupsing", "Satbhaiya", "Sebdella", "Shaibhita", "Sirsia", "Siubar", "Suraj", "Surajbar", "Tarabari", "Tarabarir", "Teprabhola", "Tepuchamaru", "Trihana", "Udiarip", "Uttam", "Uttar", "Abadnagar", "Adampur", "Ahammadpur", "Aligar", "Amlachaturi", "Arali", "Arazi", "Ashna", "Azimnagar", "Baishnabdaspur", "Balarampur", "Bandi", "Baraghata", "Barkonda", "Barshal", "Belera", "Bhabanandapur", "Bhabanipur", "Bhaluksundi", "Bhunbag", "Bidhaipur", "Bilhera", "Chak", "Chaktulsi", "Chandrapur", "Daldala", "Deoanganja", "Dhaka", "Dubrajpur", "Durgapur", "Fakirdas", "Faridpur", "Gaisara", "Gamarkunda", "Ganeshpur", "Gangapur", "Gangmuri", "Gobinda", "Gobra", "Gulalgachhi", "Haripur", "Hirapur", "Jahanabad", "Jamira", "Jaypur", "Jhikra", "Kabilashpur", "Kanaipur", "Kanchannagar", "Kanmora", "Kathgharia", "Khayradihi", "Kundira", "Kuralmatia", "Kushipur", "Kushma", "Kushmashul", "Lauberia", "Laujor", "Madarpur", "Madhaipur", "Mahishagram", "Malkura", "Monoharpur", "Muktipur", "Murdaganja", "Murgathali", "Mursabani", "Naoabag", "Nimra", "Nutangram", "Padampur", "Panikola", "Parashia", "Patadanga", "Patalpur", "Patmuri", "Perul", "Raghunandanpur", "Rajnagar", "Rajpur", "Ramnagar", "Ranigram", "Ranipur", "Raotara", "Ruhida", "Sahabad", "Sajina", "Shankarpur", "Sidpur", "Sundarkhela", "Tabadumra", "Takipur", "Talpukur", "Tantipara", "Tarasol", "Tentulia", "Tilabani", "Aliganja", "Alipur", "Amdiha", "Amlala", "Amulia", "Baliapur", "Barabani", "Baradang", "Bhanowara", "Bhaskajuri", "Bijari", "Bila", "Charanpur", "Chhotkara", "Chinchuria", "Daskiari", "Domohani", "Gopalbaid", "Gourbazar", "Hosenpur", "Itapora", "Jamgram", "Janarddan", "Jayramdanga", "Kanskuli", "Kantapahari", "Kanyapur", "Kapishtha", "Karrabaid", "Kelejora", "Khaerbad", "Khamra", "Khoshnagar", "Lalganja", "Madanpur", "Majiara", "Monohar", "Napara", "Nuni", "Pangachhiya", "Paniphala", "Panuria", "Parulbaria", "Puchra", "Putulia", "Raghunath", "Raniganja", "Rashunpur", "Roshna", "Sarshatali", "Shyamsundarpur", "Taldanga", "Alampur", "Amar", "Baghar", "Baharpur", "Bahir", "Bakalsa", "Baman", "Bandul", "Barasat", "Belkash", "Bhandardihi", "Bhita", "Bidchhala", "Birutikri", "Bongpur", "Chamardighi", "Chandul", "Chandutia", "Daspur", "Diuri", "Fakirpur", "Goda", "Gopalbati", "Gopalpur", "Haldi", "Ichharambati", "Idilpur", "Isufabad", "Jagadabad", "Jamalpur", "Jamar", "Jhinguti", "Jiara", "Jotgoda", "Kaligram", "Kamarkita", "Kamnara", "Kanchannarar", "Kantia", "Kashiara", "Kasimpur", "Katrapota", "Khaidya", "Khargeswar", "Kharjuli", "Khetia", "Krishnapur", "Kurman", "Mahinagar", "Malkita", "Matial", "Mirzapur", "Nababhat", "Nabagram", "Nala", "Nari", "Neragohalia", "Nityanandapur", "Palitpur", "Parui", "Patikirtipur", "Pilkhuri", "Pure", "Ramchandrapur", "Rayan", "Raypur", "Sadhanpur", "Sapar", "Saraitikar", "Shonpur", "Simdali", "Sirajpur", "Talit", "Tentral", "Tubgram", "Banarpal", "Bantala", "Bhusan", "Bikrampur", "Chhendipada", "Colliery", "Handapa", "Industrial", "Jarapada", "Kaniha", "Khamar", "Kiakata", "Kishorenagar", "Palalahada", "Purunakot", "Rengali", "Samal", "Talcher", "Thakurgarh", "Ambabhona", "Attabira", "Barapali", "Bargarh", "Bhatli", "Bheden", "Bijepur", "Gaisilet", "Jharbandha", "Melchhamunda", "Padmapur", "Paikamal", "Sohela", "Arjyapalli", "Asika", "Badagada", "Bhanjanagar", "Brahmapur", "Buguda", "Chamakhandi", "Chhatrapur", "Dharakote", "Digapahandi", "Ganjam", "Golanthara", "Hinjili", "Jagannath", "Jarada", "Kabisuryanagar", "Khalikote", "Kodala", "Nuagaon", "Patapur", "Polasara", "Purusottampur", "Ramagiri", "Rambha", "Seragad", "Surada", "Tarasingi", "Astaranga", "Brahmagiri", "Chandanpur", "Delanga", "Gadisagada", "Gop", "Kakatpur", "Konark", "Krushna", "Nimapada", "Pipili", "Puri", "Ramachandi", "Sadar", "Satyabadi", "Gurundia", "Hatibari", "Hemgir", "Kamarposh", "Kinjirkela", "Koida", "Kutra", "Lahunipara", "Lathikata", "Lephripara", "Mahulapada", "Raghunathapali", "Raiboga", "Rajagangapur", "Raurkela", "Sundargarh", "Talasara", "Tangarapali", "Tikaetpali", "Bishnupur", "Moirang", "Nambol", "Khoijuman", "Nachou", "Naranseina", "Ngaikhong", "Ningthoukhong", "Phubala", "Potsangbam", "Sunusiphai", "Tengkhal", "Thinungei", "Toubul", "Paomata", "Purul", "Saitu", "Alapia", "Alengi", "Atoatika", "Auguri", "Auniati", "Badal", "Bagariguri", "Bali", "Bamun", "Bangthai", "Bar", "Barbheti", "Barhampur", "Barjoha", "Barkandoli", "Bengena", "Bezar", "Bhakat", "Bhalukmari", "Bhelai", "Bhogbari", "Bhutai", "Birah", "Birahi", "Bogoriguri", "Borkala", "Bura", "Chakori", "Chengmura", "Chota", "Chutia", "Dakhin", "Darangial", "Dewdhar", "Dewri", "Dhantala", "Dimaruguri", "Dimow", "Dipahalu", "Etapara", "Gadharia", "Garai", "Garikuri", "Gederbori", "Gendhua", "Ghugar", "Gohaibari", "Gorehagi", "Hatigarh", "Hatijujua", "Hatipara", "Herapati", "Jalah", "Jalandha", "Jamuguri", "Jarani", "Kachalukhowa", "Kachamari", "Kachupit", "Kahalar", "Kakamari", "Kalajugi", "Kamar", "Karaiyani", "Karchung", "Kasoi", "Katani", "Katimari", "Kawaimari", "Kendu", "Kharupetia", "Khuti", "Kujidah", "Kumar", "Kumartup", "Kurabahi", "Kuruabahi", "Kutayani", "Kuwari", "Lalungpar", "Lao", "Low", "Mahe", "Mahrul", "Maj", "Majarati", "Majgaon", "Marguri", "Maz", "Mikir", "Mohmara", "Morangial", "Mori", "Morongial", "Na", "Nagaon", "Nam", "Naramari", "Nartam", "Nartum", "Nedhar", "Nibukali", "Niz", "Nonoi", "Palasoni", "Pani", "Phakali", "Phulaniati", "Pukhuri", "Putani", "Raidongia", "Ranga", "Rangolu", "Ranthali", "Rowmari", "Rupahi", "Samkalia", "Samua", "Sensuwa", "Siale", "Silangani", "Simaluguri", "Sing", "Singia", "Solmari", "Sukati", "Sutar", "Takowbari", "Telia", "Titajuri", "Tukulai", "Uria", "Uzara", "Adisuti", "Ahuchaul", "Ajaraguri", "Amguri", "Amtola", "Angar", "Asserakata", "Atha", "Bagalijan", "Bahadur", "Bahatia", "Bahpati", "Bakal", "Balijan", "Bandarkata", "Bantow", "Barali", "Barbocha", "Barcharia", "Bebejia", "Bebejiakumar", "Bilbagan", "Bocha", "Boichagarumaria", "Borbil", "Bordubi", "Borhamukh", "Borimuri", "Borkhimukh", "Chaboti", "Chabukdhora", "Chalichuk", "Chandmari", "Chatakpur", "Chengamari", "Cherapbhati", "Chowkham", "Christian", "Chukuli", "Dafalakata", "Dah", "Dambukial", "Debera", "Deobil", "Dhakua", "Dhala", "Dhekiajuli", "Dhenudharia", "Dhenudhoria", "Dihingia", "Dola", "Dowar", "Dulia", "Duliapathar", "Dulpatta", "Eleng", "Gamchuk", "Garoimari", "Ghagar", "Ghagarmara", "Ghagarmukh", "Ghesek", "Ghuligaon", "Ghumasuti", "Godabari", "Gohain", "Gormur", "Gossaichapari", "Gualbari", "Gubarisali", "Hahe", "Haluajan", "Hao", "Hastinapur", "Hatibandha", "Hatilung", "Hatimora", "Hindu", "Janakpur", "Janu", "Japisajia", "Jariguri", "Jaritup", "Jengrai", "Jorkhat", "Joying", "Kadamial", "Kalitagaon", "Kaliwana", "Kandali", "Kanhi", "Karah", "Kashi", "Khabuli", "Khaga", "Khagachandarpur", "Khagajugalpur", "Khar", "Kharkhari", "Khutakatia", "Koilamari", "Kulamon", "Kulamua", "Kumarkata", "Kundumiri", "Kutuhaguri", "Lechai", "Ligiramukh", "Loliti", "Maghuachapari", "Maguri", "Mahara", "Majarchapari", "Moidamia", "Morolia", "Morton", "Mudoibil", "Naharani", "Nalkata", "Padumani", "Pahumora", "Palashpara", "Patharichuk", "Patia", "Phala", "Phukanarhat", "Purani", "Puta", "Rahnapur", "Rajabherasantipur", "Rajaborah", "Rajgarh", "Rajkhowa", "Ranti", "Rongpuria", "Roumari", "Salal", "Singimari", "Sonari", "Sumdirimukh", "Sunari", "Teliatinkhuria", "Tenga", "Tinikuria", "Uhani", "Ujjalpur", "Uriam"],

    "8villages" : ["Achran", "Adampur", "Ahuta", "Ajgaha", "Aphrail", "Baghar", "Baidol", "Baisbighi", "Baldia", "Balia", "Baliabhag", "Balrampur", "Baluganj", "Bangaon", "Bangradih", "Bankatta", "Bankipur", "Barhat", "Barpokhar", "Basdeopur", "Basole", "Belwa", "Bhatwar", "Bhemial", "Bijaul", "Bijpura", "Binabari", "Birdabani", "Birnagar", "Bishunpur", "Biswaspur", "Bohar", "Chilhapara", "Chilia", "Dahra", "Daitaul", "Daribhita", "Datian", "Deugole", "Dhaltar", "Dhanhara", "Dhokria", "Dhumtola", "Dighal", "Dullahpur", "Fatehpur", "Ghasipura", "Ghatkakola", "Gorra", "Gosainpur", "Hansar", "Haripur", "Hartara", "Ibrahimpur", "Jaipura", "Jajan", "Janki", "Jujharpur", "Kadlabari", "Kallangaon", "Kamat", "Kamra", "Kansoi", "Khairan", "Kirora", "Kishunbhati", "Kismat", "Kotebador", "Lachaur", "Lalpur", "Laucha", "Laur", "Lohagara", "Lutipur", "Madhopur", "Mahesh", "Mahisal", "Mahisampur", "Malaur", "Manikpur", "Mathurapur", "Matian", "Matiari", "Milikpur", "Miliktoli", "Mirzadpur", "Mohadipur", "Mohan", "Moralbadh", "Morangpur", "Nazia", "Nista", "Pachra", "Pahencha", "Palsa", "Pandaul", "Parua", "Parwa", "Pealapur", "Pharsara", "Porabari", "Raipur", "Rajaul", "Rampur", "Rangpur", "Raniganj", "Rautara", "Rukhuamari", "Sadabarat", "Sadipur", "Sahasara", "Sahutola", "Salempur", "Sealpara", "Shahpur", "Sharif", "Sidhua", "Sihagaon", "Sihpur", "Sirampur", "Sirpatol", "Sohar", "Sonitola", "Sultanpur", "Tarapur", "Telta", "Thakurbari", "Thuti", "Amdaul", "Athara", "Babhni", "Baina", "Baliatha", "Bangarua", "Bansnagar", "Barjhala", "Bastaul", "Belgachi", "Bhalgaur", "Bisare", "Budhaili", "Budhnagar", "Chatra", "Chaumukha", "Datranga", "Dhabal", "Dhabaul", "Dharhan", "Dighauneh", "Durgapur", "Gach", "Gajhar", "Ganganagar", "Garail", "Gauripur", "Gidaul", "Gram", "Harphara", "Harsua", "Hundaili", "Jalah", "Jaunia", "Jhauwa", "Kahata", "Kamipur", "Kasht", "Kasundi", "Katghar", "Kebala", "Kehunia", "Keotia", "Keshopur", "Khajuria", "Khojate", "Khusalpur", "Kursanda", "Kusiari", "Lakhpura", "Lalganj", "Machola", "Madansahi", "Mahadeonagar", "Mahadeopur", "Maharampur", "Majgawan", "Majhaili", "Maniknagar", "Marocha", "Mijli", "Mohanpur", "Nand", "Pakaria", "Panki", "Parsa", "Patharwar", "Piritnagar", "Pranpur", "Rahar", "Ramchandarpur", "Sadapur", "Sahja", "Sakraili", "Satare", "Siktia", "Silaur", "Sirauda", "Sonaila", "Sundarmochi", "Tehargaon", "Amahara", "Auraia", "Babhanganwan", "Baghi", "Balgudar", "Barhia", "Bhelaura", "Bihraura", "Bihta", "Bikam", "Bilauri", "Birdaban", "Chak", "chamghara", "Damodarpur", "Dariapur", "Dihra", "Dugai", "Dumrahi", "Ganeshpur", "Gangta", "Garhi", "Gobind", "Gujradih", "Harpur", "Hasanpur", "Jhakhar", "Jhinaura", "Kachhiana", "Kandarpa", "Karihara", "Kesaura", "Khagaur", "Khairi", "Kharagwara", "Khirho", "Koria", "Koriazilla", "Kurauta", "Lachhmipur", "Lakhisarai", "Lodia", "Mahsauna", "Makhdumpur", "Mankattha", "Moranwan", "Nimchak", "Nirpur", "Pachauta", "Panghara", "Patner", "Rahua", "Sabipur", "Salona", "Samandih", "Siswan", "Tilo", "Wofapur", "Akauni", "Aure", "Bakiabad", "Barhara", "Bartara", "Barui", "Bhamaria", "Bigha", "Billo", "Dakra", "Dudi", "garsanda", "Gulni", "Kathautia", "Koli", "Mahsaura", "Nadiawan", "Nandnawan", "Narainpur", "Nongarh", "Parsaman", "Phulaia", "Ramgarh", "Sarma", "Satsanda", "Sawan", "Shahnagar", "Sondhi", "Surari", "Tetarhat", "Ursanwan", "Akhtiarpur", "Amwa", "Anharipur", "Arap", "Baghakol", "Baigawan", "Baliari", "Bara", "Barah", "Barda", "Bauwan", "Beni", "Berar", "Beri", "Bhadsara", "Bikram", "Birdhaur", "Chandni", "Chandri", "Chauthia", "Chichourha", "Chihunta", "Danara", "Datiana", "Donrapur", "Faridpur", "Girwari", "Gona", "Gopalpur", "Gorakhri", "Gulami", "Habaspur", "Hathsar", "Jamalpur", "Janpara", "Kanpa", "Katari", "Lahladpur", "Mahajpura", "Mahammadpur", "Majhanpura", "Majhauli", "Math", "Milki", "Moriawan", "Nagahra", "Nasirpur", "Painapur", "Pakrandha", "Patut", "Raghunathpur", "Rahi", "Saidabad", "Sangrampur", "Sarwan", "Shahjahanpur", "Shivgarh", "Sikaria", "Sundarpur", "Tari", "Wazirpur", "Anaili", "Arazi", "Bahadurpur", "Barhampur", "Barhari", "Barsauni", "Belwabhag", "Bhatgawan", "Bhatoria", "Bhogadehat", "Bhogakariat", "Biarpur", "Bikrampur", "Biloria", "Birpur", "Biru", "Burail", "Chandi", "Chhatia", "Dadaur", "Dagarua", "Dewanganj", "Dhanganwan", "Dilia", "Dimia", "Gangaili", "Gaura", "Hansadah", "Harda", "Himtiarpur", "Hiradhar", "Isruil", "Jiagachhi", "Kadwadangi", "Kalsarkismat", "Kamraili", "Kathua", "Kavaia", "Kishunpur", "Maharajpur", "Mahendrapur", "Maheshpur", "Majhwa", "Mandarpur", "Mathdobh", "Mathia", "Mohankunda", "Nagdehi", "Parmanandpur", "Patilwa", "Phasia", "Pipra", "Pirganj", "Pokharia", "Purnia", "Rajwara", "Ranipatra", "Rasulpur", "Raziganj", "Sahawa", "Sandalpur", "Shekhpura", "Sikandarpur", "Singhia", "Sobhaganj", "Tamaut", "Tariabhag", "Tharha", "Tira", "Uchitpur", "Akbarpur", "Auria", "Babhan", "Basantpur", "Basmanpur", "Bhamet", "Bhandsar", "Bhawanipur", "Bhelwa", "Bhurkunda", "Bhurkundi", "Birnia", "Birsail", "Brahamgani", "Chandaili", "Chethariapir", "Dewhari", "Dumaria", "Dumra", "Dumrail", "Garhia", "Genharia", "Gonwara", "Jabe", "Khagurail", "Khajura", "Kharkatta", "Kodai", "Kusaha", "Lathi", "Laukahi", "Mahabala", "Mahanth", "Mahathua", "Parasbani", "Raipura", "Sahgaura", "Sahiaganj", "Semaria", "Siripur", "Sondiha", "Sondip", "Sonua", "Soraiti", "Supaili", "Suraini", "Telkundar", "Tulshipur", "Ahirpur", "Alimuddinpur", "Anjani", "Asadpur", "Askaranpur", "Asoi", "Bahlolpur", "Bakhra", "Bhagwanpur", "Bhagwatpur", "Bhatauli", "Bihari", "Chakar", "Dohji", "Enayetpur", "Faizpura", "Fatehullah", "Ghataro", "Gorhia", "Hansi", "Harbanspur", "Hussaina", "Jahangirpur", "Jalalpur", "Jankipur", "Kaila", "Kali", "Karhari", "Kazipur", "Khir", "Kiratpur", "Madhupur", "Maksudanpur", "Malahi", "Manganpur", "Mansurapur", "Maricha", "Matiara", "Mian", "Panapur", "Parbodhi", "Partap", "Paterha", "Patrahi", "Patti", "Piru", "Rahsa", "Ratanpura", "Rohua", "Sadhopur", "Sahtha", "Saidpur", "Shambhupatti", "Shambhupur", "Shampur", "Shekhpatti", "Shekhpur", "Shembhupur", "Simra", "Siwan", "Telia", "Wafapur", "Warishpur", "Warispur", "Yukub", "Yusufpur", "Alargo", "Bandhdih", "Bandio", "Bursera", "Chandrapura", "Charri", "Chirudih", "Dugda", "Ghatiari", "Ghutuwai", "Junori", "Karidugedho", "Karmatanr", "Khalcho", "Kurumba", "Narra", "Nasia", "Paplo", "Pipradih", "Raja", "Ratari", "Sijhua", "Taranari", "Taranga", "Telo", "Termi", "Turio", "Achato", "Adhanua", "Agai", "Agiya", "Alkoin", "Ambatari", "Amgachhi", "Amgaria", "Amlawa", "Amruwa", "Amtibahiar", "Anandisar", "Arjuna", "Asanpur", "Athmuria", "Aurabari", "Babudih", "Babupur", "Baghakara", "Baghduba", "Baghmari", "Baijandih", "Baijubasa", "Baijudih", "Bajar", "Bajarmarua", "Baliyachauki", "Baliyadah", "Baliyakol", "Baljora", "Balsara", "Balthar", "Bandh", "Bandra", "Banjhi", "Bank", "Banka", "Banpokhariya", "Bansdiha", "Barajharna", "Barakala", "Barakola", "Barasatighat", "Baratikar", "Bardahiya", "Bargachha", "Bariyodih", "Barmasiya", "Barmuria", "Barsatiya", "Basbutiya", "Basmatakota", "Bela", "Belatanr", "Beltikri", "Bhadwari", "Bhagiapahari", "Bhagtadih", "Bhairwatanr", "Bhaluwabandh", "Bhandaro", "Bhikhoa", "Bhitia", "Bhorajamuan", "Bhuliya", "Bhusuriya", "Biarajpur", "Bichgarha", "Bihroji", "Birajkurumtanr", "Birhabaran", "Biruji", "Bisnotarsatighat", "Bisuwani", "Biyahi", "Budhibari", "Burhwakura", "Butatari", "Buturuadih", "Chakarman", "Chameli", "Chandayan", "Chandraydih", "Charkipahari", "Chauphal", "Chhatakurum", "Chhatmi", "Chhota", "Chhotandih", "Chhotbahiari", "Chigrumanjhidih", "Chiguraydih", "Chihardhandhiya", "Chihutia", "Chihutiya", "Chitarponka", "Chopa", "Chulhiya", "Dahijor", "Dahua", "Daminkol", "Dangri", "Dariadih", "Dasdih", "Debichak", "Debthar", "Dhakodih", "Dharandharpur", "Dharhi", "Dhawaghat", "Dhawatanr", "Dhibrisar", "Digambari", "Domohan", "Donihari", "Dudhani", "Dudhaniya", "Dudhwajor", "Dumabad", "Dumarhar", "Dumariya", "Dumarkola", "Dumarthar", "Dumma", "Dundiya", "Dunidih", "Durdhuajor", "Gadi", "Gadibaliya", "Gadibaliyachhit", "Gajhanda", "Gandhua", "Garbhuadih", "Garihani", "Gauri", "Gauribasar", "Gauriganj", "Ghaghra", "Ghongha", "Ghordaura", "Ghormara", "Ghospur", "Ghutiya", "Gobardaha", "Goedaha", "Gorai", "Gorsingha", "Harila", "Harilajori", "Harkata", "Harodih", "Hathwari", "Heth", "Hidolabaran", "Hirakanali", "Hirna", "Hirnatanr", "Jagarnathi", "Jagatpur", "Jaginitikar", "Jamro", "Jamua", "Jamuniya", "Jamuniyatanr", "Jariya", "Jarwadih", "Jausaghdih", "Jhagrudih", "Jhalar", "Jharkhandi", "Jhilighat", "Jitmahta", "Jiyapani", "Jogikupa", "Jogiyakanali", "Jovi", "Kabilaspur", "Kadrakura", "Kadrasa", "Kairbank", "Kairi", "Kajhiya", "Kamatpalan", "Kamdiha", "Kandraha", "Kaniyaripokhar", "Kanthikanalii", "Karankol", "Katahara", "Katban", "Kathia", "Kesidih", "Khairkhuti", "Khajra", "Khapchua", "Khapchuwa", "Kharagdiha", "Kharaiadih", "Kharwa", "Khaspalag", "Kherwa", "Khobha", "Kindua", "Kisnidih", "Kita", "Kitapalag", "Kolhanipathar", "Kolhariya", "Korabandh", "Kulhariya", "Kumardih", "Kuribank", "Kurmakol", "Kurumtanr", "Kusamha", "Kusmatilha", "Kusumbad", "Kusumdih", "Kusumkanali", "Laharniya", "Lakrakura", "Latasare", "Latwabaran", "Letwa", "Liliabaran", "Lorhia", "Lorhibaran", "Lutiyatari", "Machna", "Madhaiya", "Madhuban", "Madhudinda", "Mahadewa", "Mahat", "Mahuadabar", "Malhara", "Maljhaghar", "Manidih", "Mansaraykurwa", "Marikdih", "Masuriya", "Maswepahar", "Matbara", "Mednidih", "Mejurnach", "Misardih", "Mohiamo", "Mohnakanali", "Morni", "Muspha", "Nabawi", "Nagdah", "Nagpur", "Naiadih", "Nakti", "Narhipakariya", "Nawadih", "Nawadiha", "Nawakurwa", "Nayachitkat", "Nijbagra", "Nokhil", "Pachrukhi", "Padimanraekurwa", "Padumbana", "Paharpur", "Pahridih", "Paisardah", "Pandetari", "Paniya", "Paraiya", "Parihathbandh", "Parodal", "Patakdih", "Patharchapti", "Pathargarha", "Pathri", "Patjor", "Pharkasamra", "Phatepur", "Phursatari", "Phuta", "Phutabandh", "Pilwahi", "Pindra", "Pirhamo", "Piyarjor", "Postbari", "Pujhardih", "Puranabagara", "Puranichitkit", "Purnabathan", "Rajasor", "Rakatrohna", "Raksa", "Ramanthiya", "Ramsingrayjot", "Randhiya", "Ranga", "Rangamodichak", "Rarhiya", "Ratanpur", "Raturaydih", "Rhabi", "Rikhiyahat", "Rohanpur", "Ropni", "Rudarpur", "Rupaidih", "Sabharaydih", "Saharpura", "Salaiya", "Salgati", "Saraia", "Saraiya", "Sarasani", "Sarsa", "Satbahiri", "Semarkhut", "Semra", "Sibnagar", "Siktiya", "Silwe", "Simarjor", "Simrakita", "Simrapoj", "Singardih", "Singhraydih", "Siriya", "Sirsa", "Sirsamantharchhit", "Sirsananthar", "Sirsiya", "Sonbadia", "Sonwan", "Suardahi", "Surangi", "Suthaniya", "Tarabad", "Taran", "Tardiha", "Targachha", "Tasariya", "Teliya", "Tewarikanari", "Tharhi", "Tharhiara", "Thariara", "Tikait", "Tilaiya", "Tilaiyamajhiana", "Tilaiyatanr", "Tilauna", "Tilbhanga", "Tinghara", "Tisua", "Titmo", "Tiurnagar", "Tiurpahar", "Tulsibaran", "Tumbabel", "Turka", "Udaipur", "Udaipura", "Udaypur", "Upar", "Uparbahinga", "Upardih", "Uparlataran", "Aralgoria", "Baludih", "Bardubhi", "Chakphutaha", "Chirudi", "Dhanbad", "Dhandabar", "Dhobni", "Dhokhra", "Dubrajpur", "Gansadih", "Garblaudi", "Gohinathdih", "Jarma", "Jatudih", "Karitanr", "Kurumdaha", "Lakarkhawari", "Majhiladi", "Manidi", "Parasia", "Petia", "Pondarkanali", "Rajasbera", "Sabaldih", "Sansikhara", "Saraidaha", "Sialgudri", "Tetengabad", "Agartoli", "Angara", "Asri", "Badri", "Baheya", "Bakshidih", "Banpur", "Barkigorang", "Barwadag", "Benadag", "Berwari", "Beti", "Bisa", "Bongaibera", "Buki", "Burhibera", "Chaldag", "Cheldagsoso", "Dhurleta", "Dimra", "Dokad", "Dumargarhi", "Getalsud", "Guridih", "Gutidih", "Hahe", "Hapatbera", "Haratu", "Hesal", "Hesatu", "Heslabera", "Hundru", "Id", "Ikarhatu", "Jamuari", "Janum", "Jaradih", "Jaratoli", "Jarga", "Jaspur", "Jidu", "Jonha", "Kamta", "Kashidih", "Koynardih", "Kuchu", "Ladhuptola", "Lalgarh", "Lepsar", "Lupung", "Malghonghsa", "Masniya", "Masu", "Merha", "Mungadih", "Musangu", "Narayansoso", "Nawagarh", "Obar", "Orwabera", "Pahar", "Paika", "Pailada", "Pertol", "Rajadera", "Rangamati", "Resham", "Rupru", "Saheda", "Salhan", "Sarugori", "Simaliya", "Singari", "Sirka", "Sitadih", "Soso", "Sursu", "Tati", "Turup"],
    
    //Professions
    "RandomSelector" : ["Tech and IT","Engineering","Management","Healthcare","Finance","Science","Education","Art and media","Hospitality","Construction","Volunteering","Other"],

    "Tech and IT" : ["Computer Technician", "Help Desk Worker", "Help Desk Technician", "IT Support Specialist", "IT Technician", "Technical Specialist", "Technical Support", "Systems Designer", "Senior Systems Analyst", "Support Analyst", "Systems Analyst", "IT Coordinator", "Solutions Architect", "Web Designer", "Web Engineer", "Web Project Manager", "UI Expert", "UX Expert", "Webmaster", "Web Content Manager", "Multimedia Architect", "Web Analytics Developer", "SEO Consultant", "SEO Manager", "Internet Engineer", "Interaction Designer", "Front-End Designer", "Front-End Developer", "Mobile Developer", "Full-Stack Developer", "Technology Manager", "Technology Assistant", "Technology Specialist", "Technical Manager", "IT Sales Executive", "IT Sales Director", "Security Specialist", "IT Security Analyst", "Network Security Engineer", "Information Security Analyst", "Information Security Engineer", "Information Security Manager", "Information Security Consultant", "Security Project Manager", "Cyber Security Specialist", "Cyber Security Manager", "Database Developer", "Database Analyst", "Database Manager", "Database Engineer", "Database Specialist", "Database Coordinator", "Data Quality Manager", "Data Scientist", "Data Architect", "Information Architect", "Computer Data Scientist", "Computer Network Specialist", "Computer Systems Analyst", "Information Research Scientist", "Computer Research Manager", "Network Administrator", "Network Architect", "Network Analyst", "Network Technician", "Network Operations Engineer", "Network Reliability Engineer", "Software Engineer", "Software Architect", "Software Test Engineer", "Software Development Manager", "Software Development Engineer", "Artificial Intelligence Engineer", "Application Developer", "Application Designer", "Application Engineer", "DevOps Engineer", "Computer Programmer", "Lead Programmer", "Iteration Manager", "Financial Planner", "Frameworks Specialist", "Game Developer", "Cloud Systems Engineer", "Cloud Computing Engineer", "Cloud Architect", "Cloud System Administrator", "Cloud Consultant", "Cloud Services Provider", "Cloud Services Developer", "Cloud Product Manager", "IT Manager", "IT Project Manager", "Director Of Technology", "Technical Operations Officer", "Senior IT Consultant", "Technical Lead", "Computer Scientist", "IT Professional", "UX Designer", "SQL Developer", "Web Developer", "Desktop Support", "UI Designer", "UX Researcher", "Product Designer", "Chief Technology Officer", "Android Developer", "iOS Developer", "Flutter Developer", "Swift Developer", "Java Developer", "Python Developer", "UX Architect", "UX Specialist", "Software Developer", "JavaScript Developer", "React Developer", "JavaScript Wizard", "Product Developer", "Director Of Computing", "Scrum Master", "IT Specialist", "DevOps Manager"],

    "Engineering" : ["Engineer", "Mechanical Engineer", "Civil Engineer", "Electrical Engineer", "Assistant Engineer", "Chemical Engineer", "Chief Engineer", "Drafter", "Engineering Technician", "Geological Engineer", "Biological Engineer", "Maintenance Engineer", "Mining Engineer", "Nuclear Engineer", "Petroleum Engineer", "Plant Engineer", "Production Engineer", "Quality Engineer", "Safety Engineer", "Sales Engineer", "Technology Research Analyst", "Structural Engineer", "Electronics Engineer", "Industrial Engineer", "Workshop Manager", "Floor Manager", "Industrial Designer", "Automobile Engineer", "Powertrain Specialist", "Communications Engineer", "IoT Specialist", "Logistics Engineer", "Shipping Engineer"],

    "Management" : ["Office Manager", "Facilities Manager", "Account Executive", "Branch Manager", "Risk Manager", "Business Administrator", "IT Director", "Project Manager", "MIS Director", "Director Of Development", "Technical Services Manager", "Project Executive", "Project Superintendent", "General Manager", "Practice Administrator", "Marketing Director", "Marketing Manager", "Advertising Manager", "Brand Manager", "Promotions Manager", "Account Supervisor", "Content Manager", "Business Development Manager", "Courier Manager", "Store Manager", "Commercial Lines Manager", "Sales Manager", "Account Manager", "Area Sales Manager", "Sales Director", "Sales Supervisor", "Human Resources Director", "Human Resources Manager", "President", "Vice President", "Chief Executive Officer", "Chief Finance Officer", "Chief Marketing Officer", "Chief Operating Officer", "Chief Information Officer", "Chief Product Officer", "Chief Data Officer", "Operations Manager", "Operations Assistant", "Operations Coordinator", "Operations Analyst", "Operations Director", "VP of Operations", "Operations Professional", "Improvement Lead", "Improvement Consultant", "Virtual Assistant", "Customer Service", "Customer Support", "Customer Service Manager", "Technical Support Specialist", "Account Representative", "Client Service Specialist", "Customer Care Associate", "Accounting Staff", "Marketing Staff", "Purchasing Staff", "Shipping Staff", "Receptionist", "Proprietor", "Administrator", "Director", "Managing Partner", "Managing Member", "Senior Manager", "Program Director", "Total Quality Manager", "Operations Clerk", "Operations Research Manager", "Operations Section Manager", "Operations Supervisor", "Operations Team Leader", "Operations Unit Manager"],

    "Healthcare" : ["Counselor", "Mental Health Counselor", "Speech Pathologist", "Therapist", "Life Coach", "Nurse", "Travel Nurse", "Nurse Practitioner", "Doctor", "Caregiver", "Physical Therapist", "Pharmacist", "Pharmacy Assistant", "Medical Administrator", "Physical Therapy Assistant", "Dental Hygienist", "Massage Therapy", "Phlebotomist", "Medical Transcriptionist", "Telework Doctor", "Reiki Practitioner", "Athletic Trainer", "Clinical Liaison", "Clinical Nurse Manager", "Clinical Research Associate", "Clinical Research Coordinator", "Clinical Reviewer", "Clinical Specialist", "Dental Assistant", "Dietitian", "Exercise Physiologist", "Health Educator", "Home Health Aide", "Hospice Aide", "Nurse Aide", "Nurse Clinical Educator", "Nurse Consultant", "Nurse Informatics Analyst", "Nurse Manager", "Nurse Paralegal", "Nutritionist", "Occupational Therapy Assistant", "Orderly Attendant", "Pharmacy Clerk", "Pharmacy Technician", "Physical Therapist Assistant", "Physician Aide", "Physician Assistant", "Psychiatric Aide", "Radiation Therapist", "Recreational Therapist", "Neonatal Care Nurse", "Nurse Anesthetist", "Nurse Midwife", "Occupational Health Nurse", "Occupational Safety Specialist", "Occupational Therapist", "Office Nurse", "Oncology Nurse", "Operating Room Nurse", "Optician", "Optometrist", "Orthodontist", "Orthotist", "Paramedic", "Pediatrician", "Pediatric Endocrinology Nurse", "Pediatric Care Nurse", "Pediatric Nurse", "Pediatric Nurse Practitioner", "Perioperative Nurse", "Prosthetist", "Physician", "Podiatrist", "Post Anesthesia Nurse", "Postpartum Nurse", "Progressive Care Nurse", "Psychiatric Nurse", "Public Health Nurse", "Restorative Nurse", "Registered Medical Assistant", "Respiration  Therapist", "School Nurse", "Speech Language Pathologist", "Surgeon", "Telemetry Nurse", "Veterinarian", "Veterinary Assistant", "Veterinary Technologist", "Wellness Nurse", "Ambulatory Nurse", "Anesthesiologist", "Audiologist", "Behavioral Health Nurse", "Bereavement Counselor", "Cardiac Catheterization Nurse", "Cardiovascular Operating Nurse", "Cardiovascular Technologist", "Charge Nurse", "Chiropractor", "Dentist", "Dermatology Nurse", "Dialysis Nurse", "Executive Assistant", "Executive Director", "Health Facilities Surveyor", "Health Services Manager", "Healthcare Administrator", "Healthcare Management", "Healthcare Specialist", "Hospice Administrator", "Hospital Administrator", "Medical Administrative", "Medical Assistant", "Medical Receptionist", "Medical Associate", "Medical Billing Specialist", "Medical Coder", "Medical Manager", "Medical Office Assistant", "Medical Office Manager", "Medical Office Specialist", "Medical Records Clerk", "Medical Records Director", "Medical Records Technician", "Medical Sales", "Medical Secretary", "Medical Technologist", "Chemist", "Compounder", "Yoga Teacher", "Yoga Practitioner", "Gym Instructor", "Ayurvedic Practitioner", "Beautician", "Chief physician", "Nursing director", "Nursing manager", "Siddha Practitioner", "Health manager", "Therapeutic Director", "ASHA Worker", "Village Nurse", "AYUSH Practitioner"],

    "Finance" : ["Accountant", "Accounting Clerk", "Auditor", "Controller", "Chief Financial Officer", "Tax Accountant", "Accounting Officer", "Cost Accountant", "General Accountant", "Managerial Accountant", "Bookkeeper", "Accounting Secretary", "Finance Clerk", "Accounting Assistant", "Financial Auditor", "Compliance Auditor", "Audit Manager", "Revenue Tax Specialist", "Income Tax Specialist", "Assurance Manager", "Senior Auditor", "Comptroller", "Corporate Controller", "Director of Accounting", "Finance Manager", "Treasurer", "Business Controller", "Financial Controller", "GST Auditor", "VP of Finances", "Investment Analyst", "Real Estate Analyst", "Trust Officer", "Securities Analyst", "Financial Advisor", "Portfolio Manager", "Account Broker", "Account Manager", "Actuary", "Appraiser", "Credit Analyst", "Equity Analyst", "Finance Specialist", "Financial Analyst", "Financial Consultant", "Financial Manager", "Investment Advisor", "Investor Relations", "Securities Operations", "Underwriter", "Accounting Manager", "Accounting Supervisor", "Chartered Accountant", "Consolidation Accountant", "Contract Administrator", "Corporate Accountant", "Cost Analyst", "Derivatives Accountant", "Financial Accountant", "Financial Reporter", "Fund Accountant", "Asset Accountant", "Intermediate Accountant", "Joint Venture Accountant", "Junior Accountant", "Project Accountant", "Property Accountant", "Senior Accountant", "Staff Accountant", "Assistant Controller", "Cost Controller", "Manufacturing Controller", "Accounting Analyst", "Accounting Assistance", "Accounting Specialist", "Accounts Payable", "Accounts Receivable", "Billing Administrator", "Senior Tax Professional", "Tax Analyst", "Tax Associate", "Tax Compliance Manager", "Tax Specialist", "Audit Associate", "Audit Consultant", "Audit Supervisor", "Compliance Officer", "Fraud Analyst", "Internal Auditor", "Global Treasury Analyst", "Risk Analyst", "Risk Consultant", "Budgeting Manager", "Business Analyst", "Business Systems Analyst", "Economist", "Mergers and Acquisitions Specialist", "Venture Capital Specialist", "Credit Authorizer", "Benefits Manager", "Credit Counselor", "Accounting Director", "Accounts Payable Clerk", "Budget Analyst", "Payroll Manager", "Payroll Clerk", "Financial Services", "Commercial Loan Officer"],

    "Science" : ["Sociologist", "Biologist", "Geologist", "Physicist", "Astronomer", "Atmospheric Scientist", "Molecular Scientist", "Scientist", "Researcher", "Toxicologist", "Structural Biologist", "Statistician", "Stem Cell Researcher", "Molecular Biologist", "Oncology Researcher", "Organic Lab Worker", "Pharmaceutical Assistant", "Research Assistant", "Research Chemist", "Research Team Leader", "Research Technician", "Environmental Scientist", "Field Technician", "Forensic Chemist", "Forensic Scientist", "Gene Editing Manager", "Genetic Counselor", "Grants/Proposal Writer", "Human Factors Engineer", "Immunology Scientist", "Bioanalytical Scientist", "Biochemist", "Chemical Technician", "Climate Data Analyst", "Conservation Technician", "Development Technologist", "Drug Evaluator"],

    "Education" : ["Academic Adviser", "Admissions Assistant", "Adjunct Professor", "Adviser", "Assistant Principal", "Assistant Professor", "Associate Professor", "Career Counselor", "Child Care Assistant", "Child Care Center Teacher", "Coach", "Moderator", "Day Care Assistant", "Dean", "Education Coordinator", "Education Specialist", "Education Technician", "Educator", "Financial Aid Administrator", "Food Service Coordinator", "Food Service Manager", "Guidance Counselor", "Instructor", "Instructional Assistant", "Lead Teacher", "Preschool Assistant Teacher", "Preschool Director", "Preschool Teacher", "Principal", "Program Assistant", "Program Coordinator", "Registrar", "Residence Hall Manager", "Resource Development Coordinator", "School Administrator", "School Bus Driver", "School Counselor", "School Librarian", "School Psychologist", "School Secretary", "School Social Worker", "Special Education Assistant", "Special Education Coordinator", "Substitute Teacher", "Superintendent", "Superintendent of Schools", "Teacher", "Teacher Assistant", "Teaching Assistant", "Tutor", "Youth Care Worker", "School Peon", "Gaming Teacher", "Sports Coach", "Coaching Service", "Computer Teacher", "STEM Career Advisor", "Anganwadi Teacher", "Anganwadi Helper", "Learning Manager", "Development Manager", "Training Manager", "Personal Trainer"],

    "Art and media" : ["Graphic Designer", "Artist", "Interior Designer", "Video Editor", "Film Producer", "Play Writer", "Musician", "Computer Animator", "Photographer", "Camera Operator", "Sound Engineer", "Motion Picture Director", "Actor", "Music Producer", "Director of Photography", "Puppetry Artist", "Toy Repairer", "Toy Designer", "Designer", "3D Animator", "Chikankari Worker", "Madhubani Painter", "Gond Artist", "Classical Singer", "Classical Dancer", "Museum Curator", "Cloth Printer", "Cultural Artist", "Historian", "Sculptor", "Murti Maker", "Toy Maker", "Poet", "Story Teller", "Writer", "Music Composer", "Social Media Specialist", "Travel Writer", "Copywriter", "Film Critic", "Film Director", "Theatre Artist", "Makeup Artist", "Apparel Artist", "Journalist", "Copy Editor", "Editor/Proofreader", "Content Creator", "Speechwriter", "Communications Director", "Screenwriter", "Technical Writer", "Columnist", "Proposal Writer", "Content Strategist", "Grant Writer", "Video Game Writer", "Translator", "Warli Artist", "Terracotta Worker", "Handicraft Artist", "Artisan", "Illustrator"],

    "Hospitality" : ["Waiter", "Server", "Chef", "Fast Food Worker", "Barista", "Line Cook", "Cafeteria Worker", "Restaurant Manager", "Wait Staff Manager", "Housekeeper", "Flight Attendant", "Travel Agent", "Front Door Greeter", "Cruise Director", "Entertainment Specialist", "Hotel Manager", "Front Desk Associate", "Front Desk Manager", "Concierge", "Event Planner", "Porter", "Spa Manager", "Cruise Ship Attendant", "Casino Host", "Hotel Receptionist", "Reservationist", "Events Manager", "Meeting Planner", "Lodging Manager", "Director of Maintenance", "Valet", "Air Hostess", "Caterer", "Catering manager", "Food-Beverage Director", "Kitchen Manager", "Banquet Manager", "Food Service Supervisor", "Food Service Director"],

    "Construction" : ["Construction Worker", "Taper", "Plumber", "Heavy Equipment Operator", "Equipment Cleaner", "Carpenter", "Electrician", "Painter", "Welder", "Handyman", "Boilermaker", "Crane Operator", "Building Inspector", "Pipefitter", "Sheet Metal Worker", "Iron Worker", "Mason", "Roofer", "Solar Photovoltaic Installer", "Well Driller", "Architect", "Builder", "Masonry Worker", "Landscaping Assistant", "Construction Area Manager", "General Contractor Manager", "Brick Kiln Worker", "Sand Mine Worker", "Stone Worker"],

    "Govt and administration" : ["Havildar", "Traffic Controller", "Civil Police", "Army Officer", "Fireman", "Ticket Collector", "Railway Police", "Railway Ticket Examiner", "Income Tax Officer", "Revenue Officer", "Passport Officer", "IFS Officer", "IPS Officer", "IAS Officer", "PWD Clerk", "PWD Officer", "Pilot", "Municipal Worker", "Court Officer", "Stenographer", "Railway Clerk", "Municipal Clerk", "Police Officer", "Police Inspector", "Navy Officer", "Airforce Officer", "Health Officer", "Council Member", "Corporation Member", "Panchayat Member", "Forest Officer", "Bank Clerk", "Board Engineer", "Agriculture Officer", "Food Controller", "Drug Officer", "Army Driver", "NDMA Officer"],

    "Volunteering" : ["Animal Shelter Member", "Office Volunteer", "Animal Shelter Volunteer", "Hospital Volunteer", "Youth Volunteer", "Food Kitchen Worker", "Homeless Shelter Worker", "Conservation Volunteer", "Meals on Wheels Driver", "Emergency Relief Worker", "Red Cross Volunteer", "Food Project Worker", "Women’s Shelter Worker", "Suicide Hotline Volunteer", "School Volunteer", "Community Volunteer", "Sports Volunteer", "Mandir Volunteer", "Church Volunteer", "Social Worker", "NGO Volunteer", "WFP Volunteer"],

    "Other" : ["Cobbler", "Foam Worker", "Mali", "Sutar", "Wood Worker", "Toy Collector", "Car Serviceman", "Car Washer", "Bus Conductor", "Truck Driver", "Cotton Worker", "Canteen Owner", "Bartender", "Dairy Worker", "Fireworks Production", "Fisherman", "Flour Mill Owner", "Diamond Cutter", "Jeweler", "Goldsmith", "Handloom Worker", "Driver", "Farmer", "Gardener", "Baker", "Glass Manufacturer", "Politician", "Bangle Maker", "Beads Maker", "Bicycle Repairer", "Blacksmith", "Ferry Conductor", "Book Binder", "Cable TV Operator", "Trader", "Cane Worker", "Carpet Weaver", "Masala Maker", "House Worker", "Miner", "Newspaper Distributor", "Panwala", "Home Worker", "Papad Maker", "Petrol Pump Worker", "Potter", "Perfume Salesman", "Tailor", "Rickshaw Owner", "Soap Manufacturer", "Welding Service", "Laundry Service", "Tobacco Seller", "Rangoli Maker", "Scrap Services", "Candle Maker", "Diya Maker", "Candle Salesman", "Sports Shop Owner", "Sportsman", "Mobile Repairer", "Timber Worker", "Furniture Maker", "Toddy Tapping Service", "Warehouse Worker", "Mover", "Mechanic", "Quarry Worker", "Sawmill Worker", "Shepherd", "Vegetable Vendor", "Fruit Vendor", "Lorry Driver", "Tannery Worker", "Horticulture Worker", "Sericulture Worker", "Bodyguard", "Domestic Worker"],

    //Other arrays
    "PassPrefix" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "W", "Y"],     //Doesnt have Q, X, Z from eng letters

    "Alphabets" : ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    
    "UPISuffix" : ["jio", "upi", "apl","okhdfcbank", "oksbi", "okaxis", "airtel", "yesbank", "icici", "fbl", "axisb", "okicici", "ikwik", "ibl", "axl", "idfcbank", "waaxis", "wasbi", "hsbc", "kmbl", "paytm", "pnb", "hdfc", "mahb", "kotak", "ubi", "idbi", "cbin", "cnrb", "utbi", "rbl", "aubank", "federal", "uco", "citi", "dbs", "sib", "db", "psb"],

    "dates" : ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],

    "months" : ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],

    "hexRef" : ["0", "1", "2", "3","4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"],

    //Address specific arrays
    "RurLandmark" : ["Sanjeevani", "Hanuman", "Venkat", "Appa", "Village", "Dev", "Devi", "Ram", "Shivaji", "Gandhi", "Sardar","Vaishnavi", "Samarpan", "Maruti", "Bhajni", "Veer", "Janki", "Shivam", "Lokmanya", "Chintamani", "Chandra", "Surya", "Ganesha", "Mahavir", "Samaj", "Sadguru", "Vijaya", "Ganga", "Ambika", "Narayan", "Krishna", "Sundaram", "Shree", "Swami", "Laxmi", "Shiva", "Sunder", "Suraj", "Devraya", "Mayur", "Kartik", "Mahalaxmi", "Harsh", "Baba", "Gyan", "Matoshri", "Mata", "Sharda", "Guru", "Rashtra", "Anand", "Bansilal", "Radhe", "Shyam", "Radheshyam", "Mahatma", "Gram"],

    "RurLandmarkSuffix" : [" Hall", " Sabhagruh", " Hospital", " Health Centre", " Mandir", " Temple", " Farm", " Palacee", " Village Shop", " Shop", " Chowk", " Centre", " Statue", " Tirtha", " Nivas", " Sadan", " Baug", " Garden", " Lane", " Galli", " Building", " House", " Colony", " Hotel", " Restaurant", " School", " Shilpa", " Land", " Devasthanam", " Kendra", " Gruh", " Gurukul", " Vidya Mandir", " Bhavan", " Institute"],

    "LandmarkConjunction" : ["Near ", "Behind ", "Opposite ", "Next to ", "Beside ", "Across ", "Near ", "Near ", "Behind ", "", "", "", "", "", "",],

    "RurVillageSuffix" : [" Gram", " Panchayat", " Village", " Gaav", " Pada", "", "", "", "", "", "", "", "", "", ""],

    "RurVillageNearbySuffix" : [" Bazaar", " Railway", " Post", " Tehsil", " BDC", " Block", " Road", " Mandal", " Vibhag", " Nagar", "", "", "", "", "", "", "", "", "", ""],

    "UrbSpotNo" : ["Flat No. ", "House No. ", "Plot No. ", "Shop No. ", "Office No. ", "", "", "", "", "", "", ""],

    "UrbLandmark" : ["Sanjeevani", "Hanuman", "Devi", "Ram", "Shivaji", "Gandhi", "Vaishnavi", "Samarpan", "Maruti", "Bhajni", "Veer", "Janki", "Shivam", "Lokmanya", "Chintamani", "Chandra", "Surya", "Ganesha", "Mahavir", "Vijaya", "Ganga", "Ambika", "Narayan", "Krishna", "Sundaram", "Shree", "Swami", "Laxmi", "Shiva", "Suraj", "Devraya", "Mayur", "Kartik", "Mahalaxmi", "Baba", "Anand", "Bansilal", "Town", "Village", "Arjun", "Prithvi", "Bharat", "Jeevan"],

    "UrbLandmarkSuffix" : [" Hall", " Sabhagruh", " Hospital", " Health Centre", " Temple", " Shop", " Chowk", " Centre", " Statue", " Baug", " Garden", " Lane", " Galli", " Building", " House", " Colony", " Hotel", " Restaurant", " School", " Devasthan", " Kendra", " Factory", " Metro Station", " Bus Station", " Mall", " Shopping Mall", " Complex", " Bakery", " Market", " Karyalaya", " Cafe", " Computer Centre", " Coaching Classes", " Test Centre", " Sports Club", " Park", " College", " Cinema", " Square", " Bank", " Business Park"," Primary School", " Daily Needs", " Pharmacy", " Goods Centre", " Classes", " Cafe", " Institute", " Bhavan"],

    "UrbAreaNo" : ["Sector ", "Ward No. ", "Block No. ", "Part No. ", "Township No. ", "Complex No. ", "Building No. ",  "", "", "", "", "", ""],

    "UrbAreaSuffix" : [" Avenue", " Nagar", " Layout", " Colony", " Garden", " Park", " Enclave", " Co-Op. Society", " City", " Complex", " Plot", " C. H. Society", " Chowk"," Palace", " Square", " Market", " Bazaar", " Line", " Galli", "", "", "", "", "", "", "",],

    "UrbSuburbSuffix" : [" West", " East", " North", " South", " (W)", " (E)", " (N)", " (S)", " Cantt."," Street", " Road", " Township", " Wada", " Wadi", " Bypass", " Mandal", " Camp", " Garh", "", "", "", "", "", "", "","", "", "", "", ""]

};


let panel;

function create(){

    function addFirstName() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text = generateRandomFirstName();
                    }
                });
            }
            
        }    
    }

    function addLastName() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text = generateRandomLastName();
                    }
                });
            }
            
        }    
    }

    function addFullName() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        let fn = generateRandomFirstName();
                        let ln = generateRandomLastName();
                        item.text = `${fn} ${ln}`;

                    }
                });
            }
            
        }       
    }

    function addDoB() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text = generateRandomDoB();

                    }
                });
            }
            
        }       
    }

    function addAge() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text = generateRandomAge();

                    }
                });
            }
            
        }       
    }

    function addEmail() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        let fn = generateRandomFirstName();
                        let ln = generateRandomLastName();
                        let em = dataSet["EmailDomain"][Math.floor(Math.random()*(dataSet["EmailDomain"].length))];
                        let end = dataSet["EmailEnd"][Math.floor(Math.random()*(dataSet["EmailEnd"].length))];
                        item.text = generateEmail(fn, ln, em, end);

                    }
                });
            }
            
        }    
    }

    function addMobile() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text = "+91-" + generateMobileNumber();

                    }
                });
            }
            
        }    
    }


    function addProf() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        let domains = document.querySelector("#profession-domain").selectedOptions;
                        let profDomain = domains[0].value;
                        item.text =  generateRandomProf(profDomain);

                    }
                });
            }
            
        }      
    }

    function addRurAd() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text =  generateRandomRurAddress();

                    }
                });
            }
            
        }     
    }

    function addUrbAd() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text =  generateRandomUrbAddress();

                    }
                });
            }
            
        }    
    }

    function addCity() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text =  generateRandomCity();

                    }
                });
            }
            
        }       
    }

    function addState() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text =  generateRandomState();

                    }
                });
            }
            
        }     
    }

    function addCityState() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text =  generateCityStatePair();

                    }
                });
            }
            
        }   
    }

    function addPIN() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text =  generateRandomPINCode();

                    }
                });
            }
            
        }     
    }

    function addPass() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text =  generatePassport();

                    }
                });
            }
            
        }     
    }

    function addUID() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text =  generateAadhar();

                    }
                });
            }
            
        }     
    }

    function addPAN() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text =  generateRandomPAN();

                    }
                });
            }
            
        }       
    }

    function addUPIn() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text =  generateRandomUPIn();

                    }
                });
            }
            
        }      
    }

    function addUPIm() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text =  generateRandomUPIm();

                    }
                });
            }
            
        }      
    }

    function addDL() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text =  generateRandomDL();

                    }
                });
            }
            
        }     
    }

    function addRC() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text =  generateRandomRC();

                    }
                });
            }
            
        }      
    }

    function addETH() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text =  generateRandomETH();

                    }
                });
            }
            
        }      
    }

    function addENS() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        let fn = dataSet["FirstName"][Math.floor(Math.random()*dataSet["FirstName"].length)];
                        let ln = dataSet["LastName"][Math.floor(Math.random()*dataSet["LastName"].length)];
                        item.text = generateENS(fn, ln);

                    }
                });
            }
            
        }       
    }


    function addBTC() {
        if (!selection) {
            alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
        }else{
            
            const selectedText = selection.items.filter(item => item instanceof Text);
            if(selectedText.length === 0){
                alert("Please select text layers.","You can only add data from Indian User Data Tools plugin to selected text layers.");
            }else{
                const { editDocument } = require("application");
                editDocument({ editLabel: "Adding user data" }, function (selection) {
                    for(let item of selectedText){
                        
                        item.text = generateRandomBTC();

                    }
                });
            }
            
        }      
    }


    panel = document.createElement("div");

    panel.innerHTML = uiHTML;

    panel.querySelector("#FirstName").addEventListener("click", addFirstName);
    panel.querySelector("#LastName").addEventListener("click", addLastName);
    panel.querySelector("#FullName").addEventListener("click", addFullName);
    panel.querySelector("#DoB").addEventListener("click", addDoB);
    panel.querySelector("#Age").addEventListener("click", addAge);
    panel.querySelector("#Email").addEventListener("click", addEmail);
    panel.querySelector("#Mobile").addEventListener("click", addMobile);
    panel.querySelector("#Prof").addEventListener("click", addProf);
    panel.querySelector("#RurAddress").addEventListener("click", addRurAd);
    panel.querySelector("#UrbAddress").addEventListener("click", addUrbAd);
    panel.querySelector("#City").addEventListener("click", addCity);
    panel.querySelector("#State").addEventListener("click", addState);
    panel.querySelector("#CityState").addEventListener("click", addCityState);
    panel.querySelector("#PIN").addEventListener("click", addPIN);
    panel.querySelector("#Pass").addEventListener("click", addPass);
    panel.querySelector("#UID").addEventListener("click", addUID);
    panel.querySelector("#PAN").addEventListener("click", addPAN);
    panel.querySelector("#UPIn").addEventListener("click", addUPIn);
    panel.querySelector("#UPIm").addEventListener("click", addUPIm);
    panel.querySelector("#DL").addEventListener("click", addDL);
    panel.querySelector("#RC").addEventListener("click", addRC);
    panel.querySelector("#ETH").addEventListener("click", addETH);
    panel.querySelector("#ENS").addEventListener("click", addENS);
    panel.querySelector("#BTC").addEventListener("click", addBTC);

    return panel;

}


function show(event){
    
    if (!panel) event.node.appendChild(create());

}

/* Show the about dialog */
 function aboutPlugin() {
    alert("About Indian User Data Tools...",
        "This plugin is a collection of more than 20 types of user data generators specific to Indian Users. ",
        "",
        "",
        "",
        "Useful data types: Generate sample data ranging from user details, identities, geography, professions, and much more",
        "Random instances: Each click of the data type button generates a random sample.",
        "Diverse representation: For the diverse nature of India and its people, the IUDT plugin attempts to generate diversified data samples to represent a wide audience.",
        "",
        "",
        "",
        "For more information, please contact: ",
        "https://twitter.com/abhichirde",
        "",
        "",
        "",
        "Disclaimer: This plugin generates sample user data. Any resemblance to real world entities are purely coincidental.",
    );
}


module.exports = {
    panels: {
        openPlugin: {
            show
        },
    },
    
    commands: {
            aboutPlugin
        }

};

// -----------------------Calculation functions-----------------------------------------------------------

function numBetween(low, high){
    return Math.floor(Math.random() * (high-low+1)) + low;
}

function generateRandomFirstName(){
    let firstName = dataSet["FirstName"][Math.floor(Math.random()*(dataSet["FirstName"].length))];
    return `${firstName}`;
}

function generateRandomLastName(){
    let lastName = dataSet["LastName"][Math.floor(Math.random()*(dataSet["LastName"].length))];
    return `${lastName}`;
}

function generateMobileNumber(){
    let number = numBetween(6000000000,9999999999);         //finding a random 10 digit number for mobile
    return `${number}`;
}

//Define function for generating mobile number
function generatePassport(){
    //As per rules seen on https://www.geeksforgeeks.org/how-to-validate-indian-passport-number-using-regular-expression/
    let prefix = dataSet["PassPrefix"][Math.floor(Math.random()*(dataSet["PassPrefix"].length))];
    let num1 = numBetween(1,9);
    let num2 = numBetween(0,9);
    let num3 = numBetween(0,9);
    let num4 = numBetween(0,9);
    let num5 = numBetween(0,9);
    let num6 = numBetween(0,9);
    let num7 = numBetween(1,9);
    return `${prefix}${num1}${num2}${num3}${num4}${num5}${num6}${num7}`;
}

//Define function for generating UID number
function generateAadhar(){
    let numSet1 = numBetween(1000, 9999);
    let numSet2 = numBetween(1000, 9999); 
    let numSet3 = numBetween(1000, 9999);          
    return `${numSet1} ${numSet2} ${numSet3}`;        //Finding a random 12 digit number for UID. In 3 parts of 4 digits
}

//Define function for generating 16digit VID number
function generateRandomUPIm(){
    let mobileNum = numBetween(6000000000,9999999999); 
    let upiEnd = dataSet["UPISuffix"][Math.floor(Math.random()*(dataSet["UPISuffix"].length))];     
    return `${mobileNum}@${upiEnd}`.toLowerCase();
}

function generateRandomUPIn(){
    let fname = dataSet["FirstName"][Math.floor(Math.random()*(dataSet["FirstName"].length))];
    let lname = dataSet["LastName"][Math.floor(Math.random()*(dataSet["LastName"].length))];
    let upiEnd = dataSet["UPISuffix"][Math.floor(Math.random()*(dataSet["UPISuffix"].length))];
    return `${fname}${lname}@${upiEnd}`.toLowerCase();
}

//Define function for generating email
function generateEmail(fn, ln, em, end){
    let forRandom = ["1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "3", "3", "3", "3", "4", "4"];
    let toss = forRandom[Math.floor(Math.random()*forRandom.length)];
    let email = "";

    if(toss === "1"){
        email = `${fn}.${ln}`;
    }else if(toss === "2"){
        email = `${ln}.${fn}`;
    }else if(toss === "3"){
        email = `${fn}${ln}`;
    }else if(toss === "4"){
        if(fn.length <= 5 && ln.length <= 5){
            email = `${ln}${fn}`; 
        }else if(fn.length <= 5 && ln.length > 5){
            email = `${fn}${ln[0]}${ln[1]}${ln[2]}${ln[3]}${ln[4]}`;
        }else if(fn.length > 5 && ln.length <= 5){
            email = `${fn[0]}${fn[1]}${fn[2]}${fn[3]}${fn[4]}${ln}`;
        }else if(fn.length > 5 && ln.length > 5){
            email = `${fn[0]}${fn[1]}${fn[2]}${fn[3]}${fn[4]}${ln[0]}${ln[1]}${ln[2]}${ln[3]}${ln[4]}`;
        }
    }

    return `${email}@${em}.${end}`.toLowerCase();
}

function generateRandomPINCode(){
    let pinFirst = Math.floor(Math.random()*8 + 1);
    let pinRemaining = numBetween(10000,99999);             //Finding a random 5 digit number for remaining part of PIN
    return `${pinFirst}${pinRemaining}`;
}

function generateRandomCity(){
    let state = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    let city = dataSet[`${state}`][Math.floor(Math.random()*(dataSet[`${state}`].length-3))+3];
    return `${city}`;
}

function generateRandomState(){
    let state = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    return `${state}`;
}

function generateCityStatePair(){
    let state = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    let city = dataSet[`${state}`][Math.floor(Math.random()*(dataSet[`${state}`].length-3))+3];
    return `${city}, ${state}`;
}

function generateRandomRurAddress(){
    let state = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    let city = dataSet[`${state}`][Math.floor(Math.random()*(dataSet[`${state}`].length-3))+3];
    let landmarkConj = dataSet["LandmarkConjunction"][Math.floor(Math.random()*(dataSet["LandmarkConjunction"].length))];
    let landmark = dataSet["RurLandmark"][Math.floor(Math.random()*(dataSet["RurLandmark"].length))];
    let landmarkSuffix = dataSet["RurLandmarkSuffix"][Math.floor(Math.random()*(dataSet["RurLandmarkSuffix"].length))];
    let villageSuffix = dataSet["RurVillageSuffix"][Math.floor(Math.random()*(dataSet["RurVillageSuffix"].length))]; 
    let stateZone = dataSet[`${state}`][2];
    let village1 = dataSet[`${stateZone}villages`][Math.floor(Math.random()*(dataSet[`${stateZone}villages`].length))];
    let village2 = dataSet[`${stateZone}villages`][Math.floor(Math.random()*(dataSet[`${stateZone}villages`].length))];
    let villageNearbySuffix = dataSet["RurVillageNearbySuffix"][Math.floor(Math.random()*(dataSet["RurVillageNearbySuffix"].length))]; 
    let pinRemainingDigits = numBetween(10000,99999);
    return `${landmarkConj}${landmark}${landmarkSuffix}, ${village1}${villageSuffix}, ${village2}${villageNearbySuffix}, Dist-${city}, ${state}, Pincode-${stateZone}${pinRemainingDigits}`;
}

function generateRandomUrbAddress(){
    let state = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    let city = dataSet[`${state}`][Math.floor(Math.random()*(dataSet[`${state}`].length-3))+3];
    let spotNo = dataSet["UrbSpotNo"][Math.floor(Math.random()*(dataSet["UrbSpotNo"].length))];
    let num1 = numBetween(1,99);
    let landmarkConj = dataSet["LandmarkConjunction"][Math.floor(Math.random()*(dataSet["LandmarkConjunction"].length))];
    let landmark = dataSet["UrbLandmark"][Math.floor(Math.random()*(dataSet["UrbLandmark"].length))];
    let landmarkSuffix = dataSet["UrbLandmarkSuffix"][Math.floor(Math.random()*(dataSet["UrbLandmarkSuffix"].length))];;
    let areaNameSelectorArray = ["FirstName", "LastName",];
    let areaNameSelector = areaNameSelectorArray[Math.floor(Math.random()*areaNameSelectorArray.length)];
    let areaName = dataSet[`${areaNameSelector}`][Math.floor(Math.random()*(dataSet[`${areaNameSelector}`].length))];
    let areaSuffix = dataSet["UrbAreaSuffix"][Math.floor(Math.random()*(dataSet["UrbAreaSuffix"].length))];
    let areaNo = dataSet["UrbAreaNo"][Math.floor(Math.random()*(dataSet["UrbAreaNo"].length))];
    let num2 = numBetween(1,99);
    let stateZone = dataSet[`${state}`][2];
    let subUrb = dataSet[`${stateZone}villages`][Math.floor(Math.random()*(dataSet[`${stateZone}villages`].length))];
    let suburbSuffix = dataSet["UrbSuburbSuffix"][Math.floor(Math.random()*(dataSet["UrbSuburbSuffix"].length))];
    let pinRemainingDigits = numBetween(10000,99999);
    return `${spotNo}${num1}, ${landmarkConj}${landmark}${landmarkSuffix}, ${areaName}${areaSuffix}, ${areaNo}${num2}, ${subUrb}${suburbSuffix}, ${city}, ${state}, Pincode-${stateZone}${pinRemainingDigits}`;
}

function generateRandomProf(domain){
    if(domain === "Random"){
        let domainRan = dataSet["RandomSelector"][Math.floor(Math.random()*(dataSet["RandomSelector"].length))];
        let prof = dataSet[`${domainRan}`][Math.floor(Math.random()*(dataSet[`${domainRan}`].length))];
        return `${prof}`;
    }else{
        let prof = dataSet[`${domain}`][Math.floor(Math.random()*(dataSet[`${domain}`].length))];
        return `${prof}`;
    }
}

function generateRandomDL(){
    let state = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    let stateInitials = dataSet[`${state}`][0];
    let rtoDigits = numBetween(1, parseInt(dataSet[`${state}`][1], 10));
    let year = numBetween(1980,2021);
    let lastDigits = numBetween(1000000,9999999);
    if(rtoDigits < 10){
        return `${stateInitials}0${rtoDigits}${year}${lastDigits}`;
    }else{
        return `${stateInitials}${rtoDigits}${year}${lastDigits}`;
    }
}

function generateRandomRC(){
    let state = dataSet["State"][Math.floor(Math.random()*(dataSet["State"].length))];
    let stateInitials = dataSet[`${state}`][0];
    let rtoDigits = numBetween(1, parseInt(dataSet[`${state}`][1], 10));
    let letter1 = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];
    let letter2 = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];
    let lastDigits = numBetween(1000,9999);
    if(rtoDigits < 10){
        return `${stateInitials}0${rtoDigits}${letter1}${letter2}${lastDigits}`;
    }else{
        return `${stateInitials}${rtoDigits}${letter1}${letter2}${lastDigits}`;
    }
}

function generateRandomDoB(){
    let year = numBetween(1935, 2004);
    let month = dataSet["months"][Math.floor(Math.random()*12)];
    let date = "";
    
    if(month === "02"){
        if(year % 4 === 0){
            date = dataSet["dates"][Math.floor(Math.random()*29)];
            return `${date}-${month}-${year}`;
        }else{
            date = dataSet["dates"][Math.floor(Math.random()*28)];
            return `${date}-${month}-${year}`;
        }
    }else if(month === "04" || month === "06" || month === "09" || month === "11"){
        date = dataSet["dates"][Math.floor(Math.random()*30)];
        return `${date}-${month}-${year}`;
    }else {
        date = dataSet["dates"][Math.floor(Math.random()*31)];
        return `${date}-${month}-${year}`;
    }
}

function generateRandomAge(){
    let age = numBetween(18,86);
    return `${age}`;
}

function generateRandomPAN(){
    let letter1 = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];
    let letter2 = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];
    let letter3 = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];
    let letter4 = 'P';      //for individual persons as per rules
    let letter5 = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];        //Ideally it should be first letter of official name or surname as per rules. Here it can be random
    let digits = numBetween(1000, 9999);
    let lastLetter = dataSet["Alphabets"][Math.floor(Math.random()*(dataSet["Alphabets"].length))];

    return `${letter1}${letter2}${letter3}${letter4}${letter5}${digits}${lastLetter}`;
}


function generateRandomETH(){
    let result = [];
    let bitSize = 42;
    let forRandom = ["1", "2", "1"];

    for(let i=0; i<bitSize-2; i++){
        let ranToss = forRandom[Math.floor(Math.random()*3)];
        if(ranToss === "1"){
            result.push(dataSet["hexRef"][Math.floor(Math.random()*16)].toLowerCase());
        }else{
            result.push(dataSet["hexRef"][Math.floor(Math.random()*16)]);
        }
    }
    return `0x${result.join('')}`;
}

function generateENS(fn, ln){
    let forRandom = ["1", "2", "2","1", "1", "1", "1", "3", "3"];
    let toss = forRandom[Math.floor(Math.random()*forRandom.length)];
    let ensName = "";
    if(toss === "1"){
        ensName = fn;
    }else if(toss === "2"){
        ensName = ln;
    }else if(toss === "3"){
        if(fn.length <= 5 && ln.length <= 5){
            ensName = `${fn}${ln}`; 
        }else if(fn.length <= 5 && ln.length > 5){
            ensName = `${fn}${ln[0]}${ln[1]}${ln[2]}${ln[3]}${ln[4]}`;
        }else if(fn.length > 5 && ln.length <= 5){
            ensName = `${fn[0]}${fn[1]}${fn[2]}${fn[3]}${fn[4]}${ln}`;
        }else if(fn.length > 5 && ln.length > 5){
            ensName = `${fn[0]}${fn[1]}${fn[2]}${fn[3]}${fn[4]}${ln[0]}${ln[1]}${ln[2]}${ln[3]}${ln[4]}`;
        }
    }

    return `${ensName}.eth`.toLowerCase();
}

function generateRandomBTC(){
    let btcInitArray = ["1", "3", "bc1"];
    let btcInit = btcInitArray[Math.floor(Math.random()*3)];
    let forRandom = ["1", "2", "1"];
    let result = [];
    let size = 0;

    if(btcInit === "bc1"){

        size = numBetween(24,31);           //making total 27-34   
        for(let i=0; i<size; i++){
            let alphNumToss = forRandom[Math.floor(Math.random()*3)];
    
            if(alphNumToss === "1"){
                    result.push(btcLowLetter());
            }else{ 
                    result.push(`${numBetween(1,9)}`);
            }
        }

        return `bc1${result.join('')}`;

    }else{
        size = numBetween(26,33);           //making total 27-34
        for(let i=0; i<size; i++){
            let ranToss = forRandom[Math.floor(Math.random()*3)];
            let alphNumToss = forRandom[Math.floor(Math.random()*3)];
    
            if(alphNumToss === "1"){
                    result.push(`${numBetween(1,9)}`);
            }else{
                if(ranToss === "1"){
                    result.push(btcCapLetter());
                }else{
                    result.push(btcLowLetter());
                }
            }
        }

        return `${btcInit}${result.join('')}`;

    }

}

function btcCapLetter(){
    let letter = dataSet["Alphabets"][Math.floor(Math.random()*dataSet["Alphabets"].length)];
    if(letter !== "O" && letter !== "I"){
        return `${letter}`;
    }else{
        btcCapLetter();
    }
}


function btcLowLetter(){
    let letter = dataSet["Alphabets"][Math.floor(Math.random()*dataSet["Alphabets"].length)].toLowerCase();
    if(letter !== "l"){
        return `${letter}`;
    }else{
        btcLowLetter();
    }
}