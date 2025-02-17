IntractiveShapes:
const [grid, setGrid] = useState(Array.from({length: 3}, Array(3).fill(false)));
const queueRef = useRef([]);
const timerRef = useRef({});


Memory Game:
function => getNums => return Array => getRandomsNum => Return Shorted Array;
state => [stage, setStage] = useState("init")
state => const [nums, setNums] = useState(getNums())
state => const [opened, setOpened] = useState([]);
state => const [solved, setSolved] = useState([]);
click Func => handleStart(num,index) => setStage("start") => setNums(getRandomsNum()) => setSolved([]);
click Func => handleClick(num,index) => condition added if(opened.length === 2) return; setOpened((prev) => [...prev, index]);

useEffect(() => {
if(opened.length === 2){
setTimeOut(() => {
const id1 = opened[0];
const id2 = opened[1];
if(nums[id1] === nums[id2]){
setSolved((prev) => [...prev, nums[id1]]);
setOpened([]);
};
},1000);
}
},[opened]);

useEffect(() => {
if(solved.length === 8){
setStage("win")
}
},[solved]);

click Func => getByClass(num,index) => if(solved.includes(num)){"remove"} else if(opened.includes(index)) {"bg-blue text-white"}
eles("bg-black text-white") {};

OTP:
const CODE = "3155"
const InputsCount = CODE.length;
const refs = Array.from({length: InputsCount}, () => useRef());
state => const [inputs,setInputs] = useState(Array(InputsCount).fill(""));
function => handleSubmint () {
if(inputs.includes("")) return alert("");
const userInput = inputs.join("");
alert(userInput === CODE ? "Code Is Valid" : "Code Is Not Valid")
};

function => handleInputChange (e, index) {
const val = e.target.value;
const copyInputs = [...inputs];
copyInputs[index] = val;
setInputs(copyInputs);
if(index < InputsCount.length - 1) refs[index + 1].current?.focus();
};

function => handleKeyDown (e, index) {
if(e.key === "Backspace){
const copyInputs = [...inputs];
copyInputs[index] = val;
setInputs(copyInputs);
if(index > 0) refs[index - 1].current?.focus();
}
};

function => handlePaste (e) {
const data = e.clipboardData.getData("text").trim();
if(!Number(data)) return;
setInputs(data.split(""));
refs[InputsCount - 1].current?.focus();
}

HOC:
function => withCounter (wrapCom){
return function EnhancedCom (props){
const [count, setCount] = useState(0);

function incre (){
setCount(count + 1);
}

return <wrapCom count={count} incre={incre} {...props}/>
}
}
