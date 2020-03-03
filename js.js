;(function(){
	let modernBroBtn,IeBtn,pageColor,userBrowser,block,thanosHand,tonyHand,currentWrap,thanosAnim,tonyAnim,thanosEnd;
	let infinityArray = [];
	let openModBrow = false;
	let thanosSnapDone = false;
	const MODERN_BROWSERS =["Firefox","Edge","Chrome","Safari"];
	const AVAILABLE_WIDTH = 700;

	let contentBlock = document.getElementById("content");
	let page = document.getElementById("page");
	let nav = document.getElementById("nav");
	let cvBtn = document.getElementById("cv");
	let browser = navigator.userAgent.split(/[\s]/g).reverse().join();
	let userViewPort = document.body.clientWidth;

	const CV_WRAP = '<div class="cv_wrap">'+
		'	<h1 class="cv__name">Vladyslav Kukhlii</h1>'+
		'	<div class="cv__top">'+
		'		<div>'+
		'			<p class="cv__sub_title dust">Address</p>'+
		'			<p class="page_text dust">Odessa, Ukraine</p>'+
		'		</div>'+
		'		<div>'+
		'			<p class="cv__sub_title dust">Contacts</p>'+
		'			<div class="page_text marginB15 dust">Phone number: <a href="" class="contact_link">+380973081413</a></div>'+
		'			<div class="page_text marginB15 dust">E-Mail: <a href="mailto: vladkukhlii@gmail.com" class="contact_link">vladkukhlii@gmail.com</a></div>'+
		'		</div>'+
		'		<div>'+
		'			<p class="cv__sub_title dust">Date of birth</p>'+
		'			<p class="page_text dust">13.03.1997</p>'+
		'		</div>'+
		'	</div>'+
		'	<div class="cv__left">'+
		'		<div class="cv__block">'+
		'			<h1 class="cv__title dust"><span class="cv__icon cv__icon--edu"></span>Education</h1>'+
		'			<div class="education_item">'+
		'				<p class="page_text dust"><strong>National University “Odessa Maritime Academy”</strong><br>2014-2018<br>'+
		'					Bachelor\'s degree in NAVIGATION'+
		'				</p>'+
		'			</div>'+
		'			<div class="education_item">'+
		'				<p class="page_text dust"><strong>Hillel IT School</strong><br>2019<br>Front-End Basic</p>'+
		'			</div>'+
		'		</div>'+
		'		<div class="cv__block">'+
		'			<h1 class="cv__title dust"><span class="cv__icon cv__icon--skills"></span>Work experience</h1>'+
		'			<div class="education_item">'+
		'				<p class="page_text dust"><strong>Develup</strong><br>15.06.2019 – 01.09.2019<br>'+
		'				</p>'+
		'			</div>'+
		'			<div class="education_item">'+
		'				<p class="page_text dust"><strong>PLASTILIN</strong><br>01.12.2019 – 01.03.2020</p>'+
		'			</div>'+
		'			<div class="education_item">'+
		'				<p class="page_text dust"><strong>Freelance</strong><br>01.06.2020 – present</p>'+
		'			</div>'+
		'		</div>'+
				'<div class="cv__block">'+
		'			<h1 class="cv__title dust"><span class="cv__icon cv__icon--skills"></span>Skills</h1>'+
		'			<ul>'+
		'				<li class="cv__list-item dust">HTML, CSS(less,scss), JS;</p></li>'+
		'				<li class="cv__list-item dust">Vue.js ,Vue router, Axios;</p></li>'+
		'				<li class="cv__list-item dust">JsWeb: YouTubeAPI, Audio, canvas, AJAX, Intersection Observer;</p></li>'+
		'				<li class="cv__list-item dust">git, npm, webpack, gulp;</p></li>'+
		'				<li class="cv__list-item dust">Photoshop, Figma, Avocode;</p></li>'+
		'			</ul>'+
		'		</div>'+
		'		<div class="cv__block cv__block--hobbies">'+
		'			<h1 class="cv__title"><span class="cv__icon cv__icon--hob dust"></span>Hobbies</h1>'+
		'			<div class="hobbies_item dust" >'+
		'				<div class="hobbies_item__icon hobbies_item--run" id="hobbies_item--run"></div>'+
		'				<p class="page_text">Runnung</p>'+
		'			</div>'+
		'			<div class="hobbies_item dust">'+
		'				<div class="hobbies_item__icon hobbies_item--dance"></div>'+
		'				<p class="page_text">Ballroom Dance</p>'+
		'			</div>'+
		'			<div class="hobbies_item dust">'+
		'				<div class="hobbies_item__icon hobbies_icon--chess"></div>'+
		'				<p class="page_text">Chess</p>'+
		'			</div>'+
		'			<div class="hobbies_item dust">'+
		'				<div class="hobbies_item__icon hobbies_icon--cycle">'+
		'					<svg viewBox="0 0 640 512">'+
		'						<use xlink:href="#bicycle"></use>'+
		'					</svg>'+
		'				</div>'+
		'				<p class="page_text">Cycling</p>'+
		'			</div>'+
		'			<div class="hobbies_item dust">'+
		'				<div class="hobbies_item__icon hobbies_icon--volley">'+
		'					<svg viewBox="0 0 640 512">'+
		'						<use xlink:href="#volleyball"></use>'+
		'					</svg>'+
		'				</div>'+
		'				<p class="page_text">Volleyball</p>'+
		'			</div>'+
		'			<div class="hobbies_item dust">'+
		'				<div class="hobbies_item__icon hobbies_icon--billiard" id="hobbies_item--billiard"></div>'+
		'				<p class="page_text">Billiard</p>'+
		'			</div>'+
		'			<div class="hobbies_item dust">'+
		'				<div class="hobbies_item__icon hobbies_icon--tennis">'+
		'					<div class="tennis_ball"></div>'+
		'				</div>'+
		'				<p class="page_text">Table tennis</p>'+
		'			</div>'+
		'			<div class="hobbies_item dust">'+
		'				<div class="hobbies_item__icon hobbies_icon--hookah" id="hobbies_item--hookah">'+
		'				</div>'+
		'				<p class="page_text dust">Hookah</p>'+
		'			</div>'+
		'			<div class="hobbies_item dust">'+
		'				<div class="hobbies_item__icon hobbies_icon--guitar">'+
		'				</div>'+
		'				<p class="page_text dust">Guitar</p>'+
		'			</div>'+
		'			<div class="hobbies_item dust">'+
		'				<div class="hobbies_item__icon hobbies_icon--piano">'+
		'				</div>'+
		'				<p class="page_text">Piano</p>'+
		'			</div>'+
		'			<div class="hobbies_item dust">'+
		'				<div class="hobbies_item__icon hobbies_icon--guitar">'+
		'				</div>'+
		'				<p class="page_text">Ukulele</p>'+
		'			</div>'+
		'		</div>'+
		'	</div>'+
		'	<div class="cv__right">'+
		'		<div class="cv__block cv__block--personality">'+
		'			<h1 class="cv__title dust"><span class="cv__icon cv__icon--skills"></span>Personal qualities</h1>'+
		'			<p>Communicative</p>'+
		'			<p>Team player</p>'+
		'			<p> Quick learner</p>'+
		'			<p>Good work ethic</p>'+
		'			<p>Problem solver</p>'+
		'		</div>'+
		'		<div class="cv__block dust">'+
		'			<h1 class="cv__title"><span class="cv__icon cv__icon--languages"></span>Languages</h1>'+
		'			<p class="page_text">English: Upper-Intermediate;</p>'+
		'			<p class="page_text">Ukrainian: Native;</p>'+
		'			<p class="page_text">Russian: Native;</p>'+
		'		</div>'+
		'	</div>'+
		'</div>';
	const MAIN_WRAP =  '<section class="wrap">'+
						   '<a href="#" class="triang triang--1 dust" target="blank" style="top:0; right: 52%; background-image: url(img/1.png)"></a>'+
						   '<a href="#" class="triang triang--2 dust" target="blank" style="top:0; left: 52%; background-image: url(img/2.png)"></a>'+
						   '<a href="#" class="triang triang--3 dust" target="blank" style="bottom:50%; background-image: url(img/3.png)"></a>'+
						   '<a href="#" class="triang triang--4 dust" target="blank" style="top:51%; background-image: url(img/41.png)"></a>'+
						   '<a href="#" class="triang triang--1 dust" target="blank" style="bottom: 0; right: 52%; background-image: url(img/1_2.png)"></a>'+
						   '<a href="#" class="triang triang--2 dust" target="blank" style="bottom:0; left: 52%; background-image: url(img/2_22.png)"></a>'+
						   '<a href="#" class="triang triang--3 dust" target="blank" style="bottom:50%; right: 0; background-image: url(img/3_2.png)"></a>'+
						   '<a href="#" class="triang triang--4 dust" target="blank" style="top:51%; right: 0; background-image: url(img/4_2.png)"></a>'+
				     '</section>';
	const BRO_BTN = '<div id="ieBtn" class="nav__item nav__item--padding-5" title="IE portfolio Vesrion">'+
					'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
					 'width="486.399px" height="486.399px" viewBox="0 0 486.399 486.399" '+
					 'xml:space="preserve"><use xlink:href="#IE_logo"></svg>'+
					'</div>'+
					'<div class="nav__item nav__item--modern_bro" id="modernBroBtn">'+
						'<div class="modern_browser_btn__shape"  title="Modern browser portfolio Vesrion">'+
							'<div class="modern_browser_btn__icon modern_browser_btn__icon--1"></div>'+
							'<div class="modern_browser_btn__icon modern_browser_btn__icon--2"></div>'+
							'<div class="modern_browser_btn__icon modern_browser_btn__icon--3"></div>'+
							'<div class="modern_browser_btn__icon modern_browser_btn__icon--4"></div>'+
						'</div>'+
					'</div>'+
					'<div id="pageColor" class="nav__item"><div class="page__color"></div></div>'+
					'<div class="nav__item nav__item--thanosHand" id="thanosHand"></div>'+
					'<div class="nav__item nav__item--tonyHand" id="tonyHand"></div>';
	const EXP_WRAP = 	'<div class="exp_wrap">'+
						'<a href="#" class="exp_wrap__block exp_wrap__block--open dust" target="blank"><span class="exp_wrap__shape exp_wrap__shape--1"></span><span class="exp_wrap__shape exp_wrap__shape--2"></span></a>'+
						'<a href="#" class="exp_wrap__block exp_wrap__block--open dust" target="blank"><span class="exp_wrap__shape exp_wrap__shape--1"></span><span class="exp_wrap__shape exp_wrap__shape--2"></span></a>'+
						'<a href="#" class="exp_wrap__block exp_wrap__block--open dust" target="blank"><span class="exp_wrap__shape exp_wrap__shape--1"></span><span class="exp_wrap__shape exp_wrap__shape--2"></span></a>'+
						'<a href="#" class="exp_wrap__block exp_wrap__block--open dust" target="blank"><span class="exp_wrap__shape exp_wrap__shape--1"></span><span class="exp_wrap__shape exp_wrap__shape--2"></span></a>'+
						'<a href="#" class="exp_wrap__block exp_wrap__block--open dust" target="blank"><span class="exp_wrap__shape exp_wrap__shape--1"></span><span class="exp_wrap__shape exp_wrap__shape--2"></span></a>'+
						'<a href="#" class="exp_wrap__block exp_wrap__block--open dust" target="blank"><span class="exp_wrap__shape exp_wrap__shape--1"></span><span class="exp_wrap__shape exp_wrap__shape--2"></span></a>'+
						'<a href="#" class="exp_wrap__block exp_wrap__block--open dust" target="blank"><span class="exp_wrap__shape exp_wrap__shape--1"></span><span class="exp_wrap__shape exp_wrap__shape--2"></span></a>'+
						'<a href="#" class="exp_wrap__block exp_wrap__block--open dust" target="blank"><span class="exp_wrap__shape exp_wrap__shape--1"></span><span class="exp_wrap__shape exp_wrap__shape--2"></span></a>'+
					'</div>';

	let buildWrap = function(wrap,call){
		if(typeof wrap != "string") return alert("first argument is not a wrap string");
		if(typeof call == "undefined" || typeof call != "object"){
			call = "nothing";
			console.error("call undefined or call is not an object so call = 'nothing'");
		}
		if(currentWrap != call){
			contentBlock.innerHTML = wrap;
			currentWrap = call;
			console.log(typeof call);
		}else return;
	}
	let fly = function(){
		block = document.querySelectorAll(".triang");
		if(!openModBrow){
			[].forEach.call(block, function(block){
				block.style.transform = 'translate('+getRandomInt(-1000,1000)+'px,'+
				''+getRandomInt(-1000,1000)+'px) rotate('+getRandomInt(-2000,2000)+'deg)';
				openModBrow = true;
			});
		}
		setTimeout(posEnd, 0000);
	}
	function getRandomInt(min, max){
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
	}
	let setToDefaultSnap = function(){
		thanosEnd = "";
		thanosSnapDone = false;
		infinityArray = [];
	};
	let posEnd = function(){
			[].forEach.call(block, function(block){
				block.style.transform = 'translate(0) rotate(0)';
				block.style.transitionDuration = "5s";
			})
			setTimeout(listeners,1000);
	}
	let listeners = function(){
		for(let i = 0,l = block.length; i < l;i++){
			block[i].href= data[i].link;
			block[i].addEventListener("mouseover", function(){
				block[i].style.transition = '0.5s linear';
				block[i].style.transform = 'scale(1.5)';
				block[i].classList.add("triang--open");
				block[i].style.backgroundImage = 'url('+data[i].img+')';
			});
			block[i].addEventListener("mouseout", function(){
				block[i].style.backgroundImage = 'url('+data[i].alt+')';
				block[i].classList.remove("triang--open");
				block[i].style.transform = 'scale(1)';
			});
		}
	}
	let modernFunctions = function(){
		fly();
		if(openModBrow){
			modernBroBtn.classList.add("nav__item--active");
			IeBtn.classList.remove("nav__item--active");
			cvBtn.classList.remove("nav__item--active");
		}
	}

	let cvFunctions = function(){
		let runBlock = document.getElementById("hobbies_item--run");
		let billiardBlock = document.getElementById("hobbies_item--billiard");
		let hookah = document.getElementById("hobbies_item--hookah");
		let runningAnim = new AnimationConstructor([runBlock,6,50,40]);
		let billiardAnim = new AnimationConstructor([billiardBlock,6,50,150]);
		let hookahAnim = new AnimationConstructor([hookah,6,50,150]);
		cvBtn.classList.add("nav__item--active");
		IeBtn.classList.remove("nav__item--active");
		modernBroBtn.classList.remove("nav__item--active");
	}
	let ieFunctions = function(){
		block = document.querySelectorAll(".exp_wrap__block");
		for(let i = 0,l = block.length;i < l; i++){
			block[i].href= data[i].link;
			block[i].style.backgroundImage = 'url("'+data[i].img+'")';
			console.log("i'm here")
		}
		
		if(openModBrow){
			modernBroBtn.classList.remove("nav__item--active");
			cvBtn.classList.remove("nav__item--active");
			IeBtn.classList.add("nav__item--active");
		}
		cvBtn.classList.remove("nav__item--active");
	}
	
	let invert = function(){
		page.classList.toggle("page--white");
	}
	let runTonySnap = function(){
		if(thanosSnapDone && thanosEnd == "finished"){
			tonyAnim.start();
			setTimeout(function(){
				tonyAnim.stop();
				tonyAnim.block.style.backgroundPosition = "0";
				runTonySnap();
				let dust = contentBlock.querySelectorAll("dust");
				[].forEach.call(infinityArray, function(item){
					item.classList.remove("display", "open-thanos");
					item.classList.add("open-tony");
					setTimeout(function(){
						item.classList.remove("open-tony");
						infinityArray =[];
						thanosEnd = "";
					},5000);
				})
			}, tonyAnim.animationTime*tonyAnim.maxIndex);
			thanosSnapDone = false;
			}
	}
	let runThanosSnap = function(){
		if(!thanosSnapDone){
			thanosSnapDone = true;
			thanosAnim.start();
			setTimeout(function(){
				thanosAnim.stop();
				thanosAnim.block.style.backgroundPosition = "0";
				let a = document.querySelectorAll(".dust");
				let iteration = 0;
				do{
					let x = Math.floor(Math.random() * a.length);
					if(a[x] != "undefined" && !a[x].classList.contains("open-thanos")){
						infinityArray.push(a[x]);
						a[x].classList.add("open-thanos");
						iteration++
						console.log(iteration, a.length);
						setTimeout(function(){
							a[x].classList.add("display");
							thanosEnd = "finished";
						},6000);
					}
				}while (iteration < a.length/2)
			}, thanosAnim.animationTime*thanosAnim.maxIndex);	
		}
		
	}
	let AnimationConstructor = function(animatedArray){
		let self = this;
		if(!Array.isArray(animatedArray)) return console.error(this + animatedArray + "is not an Array");
		[self.block, 
		 self.maxIndex,
		 self.slideWidth,
		 self.animationTime,
		 self.methodIs] = animatedArray;
		
		console.log(self.maxIndex);
		const DEFAULT_SLIDE_WIDTH = 50;
		if(self.methodIs == "undefined")self.methodIs = "auto";
		if(self.slideWidth == "undefined")self.slideWidth = DEFAULT_SLIDE_WIDTH;
		if(self.animationTime == "undefined")self.animationTime = 50;
		if(self.blockCanvas == "parent"){
			self.canvas = self.block.parentNode;
		}else self.canvas = self.block;
		self.currentIndex = 0;
		self.start = function(){
			self.interval = setInterval(function() {
				self.block.style.backgroundPosition = ''+(-self.slideWidth*self.currentIndex)+'px 0px';
				self.currentIndex++;
				if (self.currentIndex > self.maxIndex) self.currentIndex = 0;
			},self.animationTime);
		}
		self.stop = function(){
			clearInterval(self.interval);
		}
		if(self.methodIs == "click"){
			return
		}else {
			self.block.parentNode.addEventListener("mouseover",self.start);
			self.block.parentNode.addEventListener("mouseout", self.stop);
		}
	}
	let runIeWrap = function(){
		console.log("not chrome,firefox or safari");
		buildWrap(EXP_WRAP);
		setTimeout(ieFunctions,0);
	}
	let runModernBrowserWrap = function(){
		buildWrap(MAIN_WRAP,this);
		nav.insertAdjacentHTML("beforeEnd",BRO_BTN);
		pageColor = document.getElementById("pageColor");
		IeBtn = document.getElementById("ieBtn");
		modernBroBtn = document.getElementById("modernBroBtn");
		thanosHand = document.getElementById("thanosHand");
		tonyHand = document.getElementById("tonyHand");
		modernFunctions();
		setTimeout(function(){
			thanosAnim = new AnimationConstructor([thanosHand,26,44,100,"click"]);
			tonyAnim = new AnimationConstructor([tonyHand,26,44,100,"click"]);
			thanosHand.addEventListener("click", runThanosSnap);
			tonyHand.addEventListener("click", runTonySnap)
			pageColor.addEventListener("click", invert);

			IeBtn.addEventListener("click",function(){
				buildWrap(EXP_WRAP,this);
				setToDefaultSnap();
				setTimeout(function(){
					ieFunctions();
				},0);

		});
		modernBroBtn.addEventListener("click", function(){
			buildWrap(MAIN_WRAP,this);
			setToDefaultSnap();
			setTimeout(function(){
				modernFunctions();
			},0);
		});
		},0);
	}
	let checkUserAgent =function(){
		for(let i = 0,l = MODERN_BROWSERS.length;i < l; i++){
			if(browser.indexOf(MODERN_BROWSERS[i]) > -1 && userViewPort > AVAILABLE_WIDTH){
				if(MODERN_BROWSERS[i] !== "Edge"){
					userBrowser = MODERN_BROWSERS[i];
					runModernBrowserWrap();
					break;
				}else if(MODERN_BROWSERS[i] == "Edge"){
					break;
				}
			}			
		}
		if (userBrowser == undefined){
			runIeWrap();
		}
	}
	checkUserAgent();
	cvBtn.addEventListener("click",function(){
		buildWrap(CV_WRAP,this);
		setToDefaultSnap();
		setTimeout(cvFunctions,0)
	})
})();
