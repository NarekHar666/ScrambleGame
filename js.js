// ... (list of words and hints)
let wordsArray = [
    {
      "word": "APPLE",
      "hint": "A fruit that is typically red or green, round in shape, and can be used to make pies and cider."
    },
    {
      "word": "BANANA",
      "hint": "A long, curved, yellow fruit with a soft and sweet flesh that is a popular snack."
    },
    {
      "word": "CARROT",
      "hint": "A long, orange vegetable that is often used in salads and as a side dish."
    },
    {
      "word": "DOG",
      "hint": "A loyal and domesticated animal often kept as a pet or used for various tasks such as guarding and herding."
    },
    {
      "word": "ELEPHANT",
      "hint": "A large and herbivorous mammal known for its long trunk, tusks, and distinctive appearance."
    },
    {
      "word": "FISH",
      "hint": "Aquatic animals that breathe through gills and are commonly caught for food."
    },
    {
      "word": "GRAPE",
      "hint": "Small, round, and typically purple or green fruits often used to make wine or eaten as a snack."
    },
    {
      "word": "HORSE",
      "hint": "A domesticated mammal often used for transportation, work, and sports like horse racing."
    },
    {
      "word": "IGLOO",
      "hint": "A dome-shaped shelter made of blocks of ice and snow, traditionally used by the Inuit people."
    },
    {
      "word": "JUG",
      "hint": "A container, often with a handle, used for holding and pouring liquids such as water or milk."
    },
    {
      "word": "KITE",
      "hint": "A lightweight, tethered aircraft that is flown in the air for recreation or sport."
    },
    {
      "word": "LEMON",
      "hint": "A citrus fruit known for its tart flavor and yellow color, often used in cooking and beverages."
    },
    {
      "word": "MANGO",
      "hint": "A tropical fruit with a sweet and juicy flesh and a distinctive aroma."
    },
    {
      "word": "NEST",
      "hint": "A structure built by birds for laying eggs and raising their young."
    },
    {
      "word": "ORANGE",
      "hint": "A citrus fruit known for its bright orange color and sweet, tangy flavor."
    },
    {
      "word": "PINEAPPLE",
      "hint": "A tropical fruit with a spiky, rough exterior and sweet, juicy flesh."
    },
    {
      "word": "QUICK",
      "hint": "Moving with great speed or rapidity; fast."
    },
    {
      "word": "RABBIT",
      "hint": "A small mammal with long ears and a fluffy tail, known for its burrowing habits."
    },
    {
      "word": "SUN",
      "hint": "The star at the center of our solar system, which provides light and heat to the Earth."
    },
    {
      "word": "TIGER",
      "hint": "A large and powerful carnivorous cat known for its distinctive orange coat with black stripes."
    },
    {
        "word": "UMBRELLA",
        "hint": "A device used to protect against rain or sunlight, typically consisting of a fabric canopy on a collapsible frame."
      },
      {
        "word": "VIOLET",
        "hint": "A small, purple or blue flowering plant often used for its pleasant fragrance in perfumes and gardens."
      },
      {
        "word": "WATERMELON",
        "hint": "A large, green-skinned fruit with sweet, juicy, and pink or red flesh, often eaten in slices."
      },
      {
        "word": "XYLOPHONE",
        "hint": "A musical instrument with wooden bars of different lengths that are struck with mallets to produce musical tones."
      },
      {
        "word": "YELLOW",
        "hint": "A bright color resembling the color of ripe lemons or the sun in a clear sky."
      },
      {
        "word": "ZEBRA",
        "hint": "A black and white striped mammal native to Africa, known for its unique pattern."
      },
      {
        "word": "ANT",
        "hint": "A small, social insect that lives in colonies and is known for its strength and hard work."
      },
      {
        "word": "BIRD",
        "hint": "A warm-blooded, feathered vertebrate known for its ability to fly, often singing melodious songs."
      },
      {
        "word": "CAT",
        "hint": "A furry, carnivorous mammal often kept as a pet for its independent and playful nature."
      },
      {
        "word": "DOLPHIN",
        "hint": "A highly intelligent marine mammal known for its playful behavior and streamlined body."
      },
      {
        "word": "EAGLE",
        "hint": "A large bird of prey known for its keen eyesight and powerful talons, often used as a symbol of strength."
      },
      {
        "word": "FOX",
        "hint": "A small to medium-sized mammal known for its cunning and bushy tail, often found in forests."
      },
      {
        "word": "GIRAFFE",
        "hint": "A tall, long-necked mammal known for its distinctive spotted coat and for being the tallest land animal."
      },
      {
        "word": "HAT",
        "hint": "A head-covering accessory often worn for protection against the sun or as a fashion statement."
      },
      {
        "word": "ICE",
        "hint": "Frozen water in solid form, often used to cool drinks or preserve food."
      },
      {
        "word": "JUMP",
        "hint": "To propel oneself off the ground by using one's legs, often for exercise or as a physical activity."
      },
      {
        "word": "KANGAROO",
        "hint": "A marsupial native to Australia known for its powerful hind legs and pouch for carrying its young."
      },
      {
        "word": "LION",
        "hint": "A large, carnivorous cat known for its majestic mane and status as the king of the jungle."
      },
      {
        "word": "MONKEY",
        "hint": "A playful and agile primate known for its curiosity and ability to swing from trees."
      },
      {
        "word": "NIGHT",
        "hint": "The period of darkness between sunset and sunrise, when most people sleep."
      },
      {
        "word": "OWL",
        "hint": "A nocturnal bird of prey known for its ability to rotate its head almost 180 degrees."
      },
      {
        "word": "PANDA",
        "hint": "A large, black-and-white bear native to China known for its peaceful demeanor."
      },
      {
        "word": "QUEEN",
        "hint": "A female monarch who rules a kingdom or country, often the wife of a king."
      },
      {
        "word": "RAT",
        "hint": "A small rodent known for its sharp teeth and long tail, often considered a pest."
      },
      {
        "word": "SNAKE",
        "hint": "A long, legless reptile known for its slithering movement and venomous species."
      },
      {
        "word": "TURTLE",
        "hint": "A slow-moving reptile known for its protective shell that serves as its home."
      },
      {
        "word": "UFO",
        "hint": "An unidentified flying object, often associated with reports of extraterrestrial spacecraft."
      },
      {
        "word": "VASE",
        "hint": "A decorative container, typically made of glass or ceramic, used for holding flowers or other items."
      },
      {
        "word": "WOLF",
        "hint": "A carnivorous mammal known for its pack behavior and howling vocalizations."
      },
      {
        "word": "XYLOPHONE",
        "hint": "A musical instrument with wooden bars of different lengths that are struck with mallets to produce musical tones."
      },
      {
        "word": "YAWN",
        "hint": "An involuntary reflex often associated with tiredness or boredom, involving opening one's mouth wide and taking a deep breath."
      },
      {
        "word": "ZOO",
        "hint": "A facility where a variety of animals are kept for public exhibition and education."
      },
      {
        "word": "COW",
        "hint": "A domesticated bovine animal kept for its milk, meat, and other products."
      },
      {
        "word": "DUCK",
        "hint": "A waterfowl bird known for its webbed feet and ability to swim gracefully on water."
      },
      {
        "word": "GOAT",
        "hint": "A domesticated mammal often kept for its milk, meat, and ability to graze on a variety of plants."
      },
      {
        "word": "HOUSE",
        "hint": "A building or structure where people live, providing shelter and a place to call home."
      },
      {
        "word": "INSECT",
        "hint": "A small, typically six-legged arthropod known for its diversity and prevalence in the animal kingdom."
      },
      {
        "word": "JACKET",
        "hint": "A garment worn on the upper body for warmth or protection, often with sleeves and a front zipper or buttons."
      },
      {
        "word": "KEY",
        "hint": "A small, metal device used for locking and unlocking doors, containers, and other mechanisms."
      },
      {
        "word": "LIZARD",
        "hint": "A reptile known for its scaly skin, often found basking in the sun and displaying various colors and patterns."
      }
  ]
let wordDisplay = document.querySelector(".display_word")
let hintDisplay = document.querySelector(".display_hint")
const skipButton = document.querySelector(".skip")
const nextButton = document.querySelector(".next")
const input = document.querySelector("input")
const timer = document.querySelector("#timer")
const count = document.querySelector(".count")
word = null

// Variables for game state and timer

let currentIndex = 0
let result = {
    right: 0,
    wrong: 0,
    skip: 0
}
let currentCount = 0
let overallCount = 10 //number of words to be guessed
st = null
const time = 20
let seconds = time

// Create a shuffled array of words for the game
let scrambledArray = wordsArray.sort((a,b)=>Math.random()-0.4).splice(0,overallCount)


// Function to initialize the next word
function next(){
  timerupdate()
  mytimePrint()
  input.focus() // Set focus on the input element
  clearInterval(st)
  currentCount++
  count.innerHTML = `${currentCount}/${overallCount}`
 
  //when game ends call gameOver function
  if(!scrambledArray[currentIndex]){
    gameOver()
    return
  }
  
  word = scrambledArray[currentIndex++]
  let maxLength = word.word.split("").length
  input.setAttribute("maxlength",maxLength)

  let returnWord = word.word.toUpperCase().split("").sort((a,b)=>Math.random()-0.3).join("")
  console.log(returnWord);
 
  // If the shuffled word is the same as the original word, try again
  if(returnWord.toLowerCase() === word.word.toLowerCase()){
    currentIndex--
    currentCount--
    next()
    return 
  }
    viewPrint(returnWord,word.hint)
    console.log(word.word);
  }

  // Function to display the word and hint
function viewPrint(randWord,orgword){
  mytimer()
  wordDisplay.innerHTML = randWord
  hintDisplay.innerHTML = `<b>HINT</b> - ${orgword}` 
  input.value = ""
}
// Event listener for the "Next" button
nextButton.addEventListener("click",()=>{
  if(input.value.toLowerCase() === word.word.toLowerCase()){
    result.right++
  }else{
    result.wrong++
  }
  next()
  input.value = ""
})

// Function to handle game over
function gameOver(){
    let container = document.querySelector(".container") 
    container.style.display = "none"
    const resultCont = document.querySelector(".result_container")
    resultCont.style.display= "flex"
    resultCont.innerHTML = `
        <p>Right:${result.right}</p>
        <p>Wrong:${result.wrong}</p>
        <p>Skip:${result.skip}</p>
        <button onclick="location.reload()">Play Again</button>
    `
  }

  // Event listener for the "Skip" button
skipButton.addEventListener("click",()=>{
  result.skip++
  input.value = ""
  next()
})

// Initialize the game on page load
document.body.onload = next()


// Function to start the timer interval
function mytimer(){
  st=setInterval(()=>{
    if(!seconds){
      timerupdate()
      result.skip++
      next()
      return
    }
    seconds--
    mytimePrint()
  },1000)
}


// Function to update and display the timer
function mytimePrint(){
  timer.innerHTML = `Time left ${seconds}s`
}

// Function to reset the timer
function timerupdate(){
  seconds = time
}
