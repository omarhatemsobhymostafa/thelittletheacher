
//quiz 1
const questions1 = [
    {
        "id": 1,
        "question": "تقع أراضي الوطن العربي في قارتين هما:",
        "options": [
            "آسيا وأوروبا",
            "آسيا وأفريقيا",
            "أفريقيا وأوروبا",
            "آسيا وأمريكا"
        ],
        "answer": "آسيا وأفريقيا",
        "desc": "يمتد الوطن العربي على قارتين فقط هما آسيا وأفريقيا، ولا يشمل أوروبا أو أمريكا."
    },
    {
        "id": 2,
        "question": "يطل الوطن العربي من جهة الغرب على:",
        "options": [
            "المحيط الأطلسي",
            "البحر الأحمر",
            "المحيط الهندي",
            "البحر المتوسط"
        ],
        "answer": "المحيط الأطلسي",
        "desc": "المحيط الأطلسي يحد الوطن العربي غربًا، بينما المحيط الهندي يحده جنوبًا."
    },
    {
        "id": 3,
        "question": "البحرين تُعتبر:",
        "options": [
            "أكبر دولة عربية من حيث المساحة",
            "أصغر دولة عربية من حيث المساحة",
            "دولة في الجناح الأفريقي",
            "غير عربية"
        ],
        "answer": "أصغر دولة عربية من حيث المساحة",
        "desc": "البحرين هي أصغر دولة عربية وتقع في الجناح الآسيوي."
    },
    {
        "id": 4,
        "question": "تبلغ مساحة الوطن العربي:",
        "options": [
            "13 مليون كم²",
            "10 مليون كم²",
            "15 مليون كم²",
            "12 مليون كم²"
        ],
        "answer": "13 مليون كم²",
        "desc": "مساحة الوطن العربي تبلغ حوالي 13 مليون كيلومتر مربع."
    },
    {
        "id": 5,
        "question": "يضم الوطن العربي أماكن مقدسة منها:",
        "options": [
            "الأزهر الشريف",
            "برج خليفة",
            "الأهرامات",
            "البحر الميت"
        ],
        "answer": "الأزهر الشريف",
        "desc": "الأزهر الشريف في مصر يعد أحد أهم الأماكن المقدسة في الوطن العربي."
    },
    {
        "id": 6,
        "question": "يتحكم الوطن العربي في مضائق مهمة مثل:",
        "options": [
            "مضيق البوسفور",
            "مضيق باب المندب",
            "مضيق جبل طارق",
            "ب + ج"
        ],
        "answer": "ب + ج",
        "desc": "الوطن العربي يتحكم في مضائق استراتيجية، مثل باب المندب الذي يربط البحر الأحمر بالمحيط الهندي، وجبل طارق الذي يربط البحر المتوسط بالمحيط الأطلسي."
    },
    {
        "id": 7,
        "question": "أكبر دولة عربية من حيث المساحة هي:",
        "options": [
            "السعودية",
            "الجزائر",
            "السودان",
            "مصر"
        ],
        "answer": "الجزائر",
        "desc": "الجزائر هي الدولة العربية الأكبر مساحة، وتقع في الجناح الأفريقي."
    },
    {
        "id": 8,
        "question": "عدد الدول العربية هو:",
        "options": [
            "21 دولة",
            "22 دولة",
            "20 دولة",
            "25 دولة"
        ],
        "answer": "22 دولة",
        "desc": "يبلغ عدد الدول العربية 22 دولة موزعة بين قارتين: آسيا وأفريقيا."
    },
    {
        "id": 9,
        "question": "من الدول التي تقع في الجناح الآسيوي:",
        "options": [
            "السودان",
            "العراق",
            "جيبوتي",
            "الجزائر"
        ],
        "answer": "العراق",
        "desc": "العراق تقع في الجناح الآسيوي، بينما السودان وجيبوتي والجزائر تقع في الجناح الأفريقي."
    },
    {
        "id": 10,
        "question": "تُعتبر جبال زاجروس جزءًا من حدود الوطن العربي من جهة:",
        "options": [
            "الغرب",
            "الجنوب",
            "الشرق",
            "الشمال"
        ],
        "answer": "الشرق",
        "desc": "جبال زاجروس تُعتبر جزءًا من الحدود الشرقية للوطن العربي."
    },
    {
        "id": 11,
        "question": "من الخصائص الثقافية المشتركة بين الدول العربية:",
        "options": [
            "اللغات المتعددة",
            "اللغة العربية والدين الإسلامي",
            "الاستقلال السياسي",
            "تنوع التضاريس"
        ],
        "answer": "اللغة العربية والدين الإسلامي",
        "desc": "اللغة العربية والدين الإسلامي هما العاملان الأساسيان اللذان يجمعان الدول العربية."
    },
    {
        "id": 12,
        "question": "تتمثل الأهمية الاقتصادية لموقع الوطن العربي في:",
        "options": [
            "التحكم بالممرات البحرية",
            "وجود الجبال العالية",
            "كثرة الصحراء",
            "التوسع العمراني"
        ],
        "answer": "التحكم بالممرات البحرية",
        "desc": "موقع الوطن العربي الاستراتيجي يجعله يتحكم بممرات بحرية هامة، مثل قناة السويس ومضيق هرمز."
    },
    {
        "id": 13,
        "question": "من دول الجناح الأفريقي:",
        "options": [
            "اليمن",
            "جيبوتي",
            "سوريا",
            "لبنان"
        ],
        "answer": "جيبوتي",
        "desc": "جيبوتي تقع في الجناح الأفريقي، بينما اليمن وسوريا ولبنان في الجناح الآسيوي."
    },
    {
        "id": 14,
        "question": "يُعتبر مضيق هرمز ممرًا بحريًا هامًا لأنه:",
        "options": [
            "يقع بين آسيا وأوروبا",
            "يتحكم في التجارة العالمية",
            "يربط البحر الأحمر بالمتوسط",
            "يحتوي على موارد طبيعية"
        ],
        "answer": "يتحكم في التجارة العالمية",
        "desc": "مضيق هرمز يُعد ممرًا استراتيجيًا لنقل النفط والتجارة العالمية."
    },
    {
        "id": 15,
        "question": "من النتائج المترتبة على التحكم في الممرات البحرية:",
        "options": [
            "زيادة الصراعات",
            "التحكم في التجارة العالمية",
            "انخفاض النمو الاقتصادي",
            "انقطاع الطرق الدولية"
        ],
        "answer": "التحكم في التجارة العالمية",
        "desc": "بفضل موقعه الاستراتيجي، يُسيطر الوطن العربي على حركة التجارة العالمية المارة عبر ممراته البحرية."
    }
];
let selectedAnswers1=[

]
let score1 = 0
let isSubmitted1=false
const answer1 = () => {
   
    score1 = 0

    questions1.forEach((question, Qindex) => {
        const selectedOption = document.querySelector(
            `input[name="question-${Qindex}"]:checked`
        );

        if (selectedOption) {
            selectedAnswers1[Qindex] = selectedOption.value;
        } else {
            selectedAnswers1[Qindex] = null; 
        }
    });

    selectedAnswers1.forEach((selectedAnswer, index) => {
        if (selectedAnswer === questions1[index].answer) {
            score1++
        }
    });

    console.log(score1);

};
 
document.getElementById("container1").innerHTML += `

    <iframe width="1004" height="565" src="https://www.youtube.com/embed/ihG2tql60GM" title="L1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

`;
questions1.forEach((question, index) => {
 
    document.getElementById("container1").innerHTML += `
 
      <h3>${question.question}</h3>
        <div id="options-container-${index}">
        </div>

      
    `;

    

    question.options.forEach((option ,i) => {
     
       
     
        document.getElementById(`options-container-${index}`).innerHTML += `
            <label>
                <input type="radio" id='${question.answer}' name="question-${index}" value="${option}" onclick='${'answer1()'}'/>
                ${option}
            </label><br/>
            
        `;
   
    });
  

});

window.onload = () => {
    renderQuiz1()
  };
  function renderQuiz1(){
    
    const isSubmitted1 = localStorage.getItem('checkSubmitted1');
    const savedContent = localStorage.getItem('content1');
  
    if (isSubmitted1 === 'true' && savedContent) {

      document.getElementById("container1").innerHTML = savedContent;
    }
  };

  document.getElementById("container1").onsubmit = (e) => {
    e.preventDefault(); 
  
    if (selectedAnswers1.includes(null) || selectedAnswers1.length === 0) {

      return;
    }
  
    const content1 = `
    <iframe width="1004" height="565" src="https://www.youtube.com/embed/ihG2tql60GM" title="L1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>درجتك هي ${score1}/${questions1.length}</h3>
      <h3>${Math.round((score1 / questions1.length) * 100)}%</h3>

      ${selectedAnswers1.map((selectedAnswer, i) => {
        const question = questions1[i];
        return `
        
          <p><b>${question.question}</b></p>
          
          <p>إجابتك: ${selectedAnswer || 'لم يتم الإجابة على هذا السؤال'}</p>
          <p>${selectedAnswer === question.answer.trim() ? 'إجابة صحيحة ✅' : 'إجابتك خاطئة ❌'}</p>
          <p>${question.desc}</p>
          <br><br>
        `;
      }).join('')}
    `;
      
 
    localStorage.setItem('checkSubmitted1', 'true');
    localStorage.setItem('content1', content1);
    document.getElementById("container1").innerHTML = content1;
  }
document.querySelector('#container1').innerHTML+=`

<button type='submit' onclick='' style='submit-btn'>انهاء الاختبار الان</button>
`

//quiz 2
const questions2 = [
    {
        "id": 1,
        "question": "من كان أول من أسلم من الصبية؟",
        "options": [
            "جده عبد المطلب",
            "عمه أبو طالب",
            "علي بن أبي طالب",
            "أبو بكر الصديق"
        ],
        "answer": "علي بن أبي طالب",
        "desc": "كان علي بن أبي طالب أول من أسلم من الصبية، حيث أسلم وهو في سن صغيرة وكان من المقربين للنبي صلى الله عليه وسلم."
    },
    {
        "id": 2,
        "question": "في أي سنة وُلد النبي محمد صلى الله عليه وسلم؟",
        "options": [
            "570 ميلاديًا",
            "570 هجريًا",
            "622 ميلاديًا",
            "622 هجريًا"
        ],
        "answer": "570 ميلاديًا",
        "desc": "وُلد النبي محمد صلى الله عليه وسلم في عام 570 ميلاديًا، وهو العام الذي سُمي عام الفيل."
    },
    {
        "id": 3,
        "question": "أين نزل الوحي على الرسول صلى الله عليه وسلم لأول مرة؟",
        "options": [
            "غار حراء",
            "غار ثور",
            "المسجد الحرام",
            "جبل أحد"
        ],
        "answer": "غار حراء",
        "desc": "نزل الوحي على النبي محمد صلى الله عليه وسلم لأول مرة في غار حراء بمكة المكرمة."
    },
    {
        "id": 4,
        "question": "ما هي مدة الدعوة السرية للإسلام؟",
        "options": [
            "سنتين",
            "ثلاث سنوات",
            "أربع سنوات",
            "خمس سنوات"
        ],
        "answer": "ثلاث سنوات",
        "desc": "استمرت الدعوة السرية في مكة لمدة ثلاث سنوات قبل أن يطلب الله تعالى من الرسول صلى الله عليه وسلم دعوة الناس علنًا."
    },
    {
        "id": 5,
        "question": "ماذا كان يعمل النبي صلى الله عليه وسلم قبل البعثة؟",
        "options": [
            "تاجر",
            "فلاح",
            "جندي",
            "طباخ"
        ],
        "answer": "تاجر",
        "desc": "كان النبي محمد صلى الله عليه وسلم يعمل في التجارة قبل البعثة، وقد اشتهر بلقب 'الصادق الأمين' بسبب صدقه وأمانته."
    },
    {
        "id": 6,
        "question": "ماذا كان يسمى أول هجرة للمسلمين إلى الحبشة؟",
        "options": [
            "الهجرة الكبرى",
            "الهجرة الأولى",
            "الهجرة الثانية",
            "الهجرة إلى المدينة"
        ],
        "answer": "الهجرة الأولى",
        "desc": "كانت الهجرة الأولى للمسلمين إلى الحبشة بسبب الاضطهاد الذي تعرضوا له في مكة، حيث لجأوا إلى ملك الحبشة الذي كان عادلًا."
    },
    {
        "id": 7,
        "question": "ماذا كانت قريش تخاف منه عندما حاربت دعوة الرسول صلى الله عليه وسلم؟",
        "options": [
            "خوفًا من فقدان مكانتها بين القبائل",
            "خوفًا من زيادة عدد المسلمين",
            "خوفًا من غزو الأعداء",
            "خوفًا من أن يصبح محمد صلى الله عليه وسلم ملكًا"
        ],
        "answer": "خوفًا من فقدان مكانتها بين القبائل",
        "desc": "كانت قريش تخاف من أن يؤدي انتشار الإسلام إلى فقدان مكانتها بين قبائل العرب."
    },
    {
        "id": 8,
        "question": "من هي أول من أسلمت من النساء؟",
        "options": [
            "فاطمة الزهراء",
            "عائشة بنت أبي بكر",
            "خديجة بنت خويلد",
            "أم سلمة"
        ],
        "answer": "خديجة بنت خويلد",
        "desc": "كانت السيدة خديجة بنت خويلد أول من أسلمت من النساء واحتضنت الدعوة الإسلامية بعد نزول الوحي على النبي صلى الله عليه وسلم."
    },
    {
        "id": 9,
        "question": "في أي سنة كانت الهجرة إلى المدينة المنورة؟",
        "options": [
            "1 هـ",
            "2 هـ",
            "3 هـ",
            "4 هـ"
        ],
        "answer": "1 هـ",
        "desc": "الهجرة إلى المدينة المنورة حدثت في السنة الأولى من الهجرة (1 هـ) بعد أن زادت المضايقات والاضطهادات للمسلمين في مكة."
    },
    {
        "id": 10,
        "question": "أي من هذه الصفات كانت من الصفات السيئة للعرب قبل الإسلام؟",
        "options": [
            "الكرم",
            "الوفاء بالعهد",
            "وأد البنات",
            "الشجاعة"
        ],
        "answer": "وأد البنات",
        "desc": "وأد البنات كان من العادات السيئة التي كانت منتشرة بين بعض قبائل العرب قبل الإسلام، حيث كانوا يدفنون البنات أحياء خوفًا من العار."
    },
    {
        "id": 11,
        "question": "ما هي أول معركة خاضها المسلمون؟",
        "options": [
            "معركة بدر",
            "معركة أحد",
            "معركة الخندق",
            "معركة حنين"
        ],
        "answer": "معركة بدر",
        "desc": "معركة بدر كانت أول معركة كبرى خاضها المسلمون ضد قريش في السنة الثانية من الهجرة."
    },
    {
        "id": 12,
        "question": "ما الذي كانت قريش تفعله لوقف الدعوة الإسلامية في مكة؟",
        "options": [
            "تقديم الأموال للمسلمين",
            "الإيذاء والتهديد",
            "دعم الرسول صلى الله عليه وسلم",
            "إرسال رسل للمطالبة بالسلام"
        ],
        "answer": "الإيذاء والتهديد",
        "desc": "كانت قريش تلاحق المسلمين وتؤذيهم من خلال العنف والتهديدات في محاولة لوقف انتشار الإسلام."
    },
    {
        "id": 13,
        "question": "من كان أول من أسلم من الصحابة من الرجال؟",
        "options": [
            "أبو بكر الصديق",
            "عمر بن الخطاب",
            "علي بن أبي طالب",
            "عثمان بن عفان"
        ],
        "answer": "أبو بكر الصديق",
        "desc": "كان أبو بكر الصديق أول من أسلم من الصحابة بعد خديجة بنت خويلد، وكان من أقرب المقربين للنبي صلى الله عليه وسلم وسانده في بداية الدعوة."
    },
    {
        "id": 14,
        "question": "أي من هذه الصفات كانت من صفات العرب الحسنة قبل الإسلام؟",
        "options": [
            "وأد البنات",
            "شرب الخمر",
            "الوفاء بالعهد",
            "الإيثار"
        ],
        "answer": "الوفاء بالعهد",
        "desc": "الوفاء بالعهد كان من الصفات الحسنة التي تحلى بها العرب قبل الإسلام، وكانت من أبرز القيم التي حافظوا عليها."
    },
    {
        "id": 15,
        "question": "ماذا كان السبب وراء الهجرة الأولى للمسلمين إلى الحبشة؟",
        "options": [
            "خوفًا من قريش",
            "بسبب ظلم قريش للمسلمين",
            "طلبًا للرزق",
            "تجنبًا لحروب العرب"
        ],
        "answer": "بسبب ظلم قريش للمسلمين",
        "desc": "الهجرة الأولى إلى الحبشة كانت بسبب الظلم الكبير الذي تعرض له المسلمون في مكة، حيث لجأوا إلى ملك الحبشة الذي كان يرحب بهم ويحميهم."
    }
]
let selectedAnswers2=[

]
let score2 = 0
let isSubmitted2=false
const answer2 = () => {
   
    score2 = 0

    questions2.forEach((question, Qindex) => {
        const selectedOption = document.querySelector(
            `input[name="question-${Qindex}"]:checked`
        );

        if (selectedOption) {
            selectedAnswers2[Qindex] = selectedOption.value;
        } else {
            selectedAnswers2[Qindex] = null; 
        }
    });

    selectedAnswers2.forEach((selectedAnswer, index) => {
        if (selectedAnswer === questions2[index].answer) {
            score2++
        }
    });

    console.log(score2);

};
document.getElementById("container2").innerHTML += `
 
    <iframe width="1004" height="565" src="https://www.youtube.com/embed/GeePsHWoXY8" title="L2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

`;

questions2.forEach((question, index) => {
 
    document.getElementById("container2").innerHTML += `
 
      <h3>${question.question}</h3>
        <div id="options-container2-${index}">
        </div>

      
    `;

    

    question.options.forEach((option ,i) => {
     
       
     
        document.getElementById(`options-container2-${index}`).innerHTML += `
            <label>
                <input type="radio" id='${question.answer}' name="question-${index}" value="${option}" onclick='${'answer2()'}'/>
                ${option}
            </label><br/>
            
        `;
   
    });
  

});

window.onload = () => {
    renderQuiz1()
  };
  function renderQuiz1(){
    
    const isSubmitted2 = localStorage.getItem('checkSubmitted2');
    const savedContent = localStorage.getItem('content2');
  
    if (isSubmitted2 === 'true' && savedContent) {

      document.getElementById("container2").innerHTML = savedContent;
    }
  };

  document.getElementById("container2").onsubmit = (e) => {
    e.preventDefault(); 
  
    if (selectedAnswers2.includes(null) || selectedAnswers2.length === 0) {

      return;
    }
  
    const content2 = `
    <iframe width="1004" height="565" src="https://www.youtube.com/embed/GeePsHWoXY8" title="L2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>درجتك هي ${score2}/${questions2.length}</h3>
      <h3>${Math.round((score2 / questions2.length) * 100)}%</h3>

      ${selectedAnswers2.map((selectedAnswer, i) => {
        const question = questions2[i];
        return `
        
          <p><b>${question.question}</b></p>
          
          <p>إجابتك: ${selectedAnswer || 'لم يتم الإجابة على هذا السؤال'}</p>
          <p>${selectedAnswer === question.answer.trim() ? 'إجابة صحيحة ✅' : 'إجابتك خاطئة ❌'}</p>
          <p>${question.desc}</p>
          <br><br>
        `;
      }).join('')}
    `;
      
 
    localStorage.setItem('checkSubmitted2', 'true');
    localStorage.setItem('content2', content2);
    document.getElementById("container2").innerHTML = content2;
  }
document.querySelector('#container2').innerHTML+=`

<button type='submit' onclick='' class='submit-btn'>انهاء الاختبار الان</button>
`

//quiz 3 
const questions3 = [
    {
        "id": 1,
        "question": "ماذا حاولت قريش فعله لمنع الهجرة إلى المدينة؟",
        "options": [
            "فرضت جزية",
            "حاولت قتل الرسول صلى الله عليه وسلم",
            "منعت التجارة",
            "أغلقت الطرق"
        ],
        "answer": "حاولت قتل الرسول صلى الله عليه وسلم",
        "desc": "قريش كانت تشعر بالتهديد من انتشار الإسلام فخططت لقتل الرسول صلى الله عليه وسلم لمنع الهجرة."
    },
    {
        "id": 2,
        "question": "في أي عام حدثت غزوة بدر؟",
        "options": [
            "الأول",
            "الثاني",
            "الثالث",
            "الرابع"
        ],
        "answer": "الثاني",
        "desc": "غزوة بدر حدثت في السنة الثانية من الهجرة وكانت انتصاراً مهماً للمسلمين."
    },
    {
        "id": 3,
        "question": "من الذي ساعد الرسول صلى الله عليه وسلم في الهجرة؟",
        "options": [
            "عمر بن الخطاب",
            "أبو بكر الصديق",
            "عثمان بن عفان",
            "علي بن أبي طالب"
        ],
        "answer": "أبو بكر الصديق",
        "desc": "أبو بكر الصديق كان مع الرسول صلى الله عليه وسلم في الهجرة إلى المدينة المنورة."
    },
    {
        "id": 4,
        "question": "ما الذي تحول في غزوة أحد؟",
        "options": [
            "النصر إلى هزيمة بسبب خيانة الرماة",
            "الهزيمة إلى نصر بسبب الخيانة",
            "الصلح بين المسلمين والكفار",
            "الغزوة إلى هدنة"
        ],
        "answer": "النصر إلى هزيمة بسبب خيانة الرماة",
        "desc": "في غزوة أحد، كان النصر للمسلمين في البداية لكن بسبب ترك الرماة لمواقعهم، حدث تحول لصالح قريش."
    },
    {
        "id": 5,
        "question": "من قام بتوجيه نصيحة حفر الخندق حول المدينة؟",
        "options": [
            "سعد بن أبي وقاص",
            "سلمان الفارسي",
            "أبو هريرة",
            "عبد الله بن مسعود"
        ],
        "answer": "سلمان الفارسي",
        "desc": "سلمان الفارسي اقترح حفر الخندق أثناء غزوة الخندق لحماية المدينة من هجوم قريش."
    },
    {
        "id": 6,
        "question": "ما الذي فعلته قريش في صلح الحديبية؟",
        "options": [
            "رفضت التفاوض",
            "قامت بقتل المسلمين",
            "نقضت الاتفاق بعد عامين",
            "اعتنقت الإسلام"
        ],
        "answer": "نقضت الاتفاق بعد عامين",
        "desc": "قريش نقضت الاتفاق بعد عامين عندما اعتدت على حلفاء المسلمين."
    },
    {
        "id": 7,
        "question": "ما هو اسم المدينة التي هاجر إليها الرسول صلى الله عليه وسلم؟",
        "options": [
            "مكة",
            "المدينة المنورة",
            "بدر",
            "الطائف"
        ],
        "answer": "المدينة المنورة",
        "desc": "المدينة المنورة هي المكان الذي هاجر إليه الرسول صلى الله عليه وسلم، وكانت نقطة تحول في تاريخ الإسلام."
    },
    {
        "id": 8,
        "question": "لماذا قام الرسول صلى الله عليه وسلم ببناء المسجد بعد الهجرة؟",
        "options": [
            "لتعليم القرآن",
            "لاحتضان الأنصار والمهاجرين",
            "ليكون مقرًا للحكومة",
            "كل ما سبق"
        ],
        "answer": "كل ما سبق",
        "desc": "بناء المسجد كان هدفه تعليم الدين، وكان مقرًا للشؤون الاجتماعية والسياسية."
    },
    {
        "id": 9,
        "question": "ما هي أول معركة انتصر فيها المسلمون بعد الهجرة؟",
        "options": [
            "غزوة بدر",
            "غزوة أحد",
            "غزوة الخندق",
            "فتح مكة"
        ],
        "answer": "غزوة بدر",
        "desc": "غزوة بدر كانت أول معركة هامة انتصر فيها المسلمون ضد قريش."
    },
    {
        "id": 10,
        "question": "كيف انتهت غزوة الخندق؟",
        "options": [
            "بهزيمة المسلمين",
            "بانتصار قريش",
            "بانتصار المسلمين دون قتال",
            "بصلح بين الطرفين"
        ],
        "answer": "بانتصار المسلمين دون قتال",
        "desc": "غزوة الخندق انتهت بعد أن فشل قريش في اختراق الخندق وانسحبوا."
    },
    {
        "id": 11,
        "question": "ما هو سبب فتح مكة؟",
        "options": [
            "نقض قريش للصلح",
            "غزو المدينة",
            "انتشار الإسلام في مكة",
            "قتل الصحابة"
        ],
        "answer": "نقض قريش للصلح",
        "desc": "قريش نقضت صلح الحديبية واعتدت على حلفاء المسلمين، مما جعل الرسول صلى الله عليه وسلم يقرر فتح مكة."
    },
    {
        "id": 12,
        "question": "ما الذي أدى إلى انتصار المسلمين في غزوة بدر؟",
        "options": [
            "كثرة عدد المسلمين",
            "استراتيجيات الرسول العسكرية",
            "ضعف جيش قريش",
            "تدخّل الملائكة"
        ],
        "answer": "تدخّل الملائكة",
        "desc": "الملائكة أمدّت المسلمين بالقتال في غزوة بدر، مما كان سببًا رئيسيًا في نصرهم."
    },
    {
        "id": 13,
        "question": "ما هو السبب في بناء الرسول صلى الله عليه وسلم للمدينة المنورة كمجتمع موحد؟",
        "options": [
            "وجود فتنة في مكة",
            "لتطبيق النظام والعدل",
            "لمكانة مكة الدينية",
            "للاستراحة"
        ],
        "answer": "لتطبيق النظام والعدل",
        "desc": "المدينة كانت تعتبر مركزًا لبناء الدولة الإسلامية على أسس من النظام والعدل."
    },
    {
        "id": 14,
        "question": "في أي عام توفي الرسول صلى الله عليه وسلم؟",
        "options": [
            "10 هـ",
            "11 هـ",
            "12 هـ",
            "13 هـ"
        ],
        "answer": "11 هـ",
        "desc": "توفي الرسول صلى الله عليه وسلم في السنة 11 هـ بعد أن أكمل رسالته."
    },
    {
        "id": 15,
        "question": "ما هو الهدف من بناء صحيفة المدينة؟",
        "options": [
            "تنظيم الحياة السياسية",
            "تنظيم حقوق وواجبات المواطنين",
            "نشر السلام بين المسلمين واليهود",
            "كل ما سبق"
        ],
        "answer": "كل ما سبق",
        "desc": "صحيفة المدينة كانت تهدف إلى تنظيم الحياة السياسية والاجتماعية، وضمان حقوق وواجبات جميع سكان المدينة، بما فيهم اليهود."
    }
]

let selectedAnswers3 = [];
let score3 = 0;
let isSubmitted3 = false;

const answer3 = () => {
    score3 = 0;

    questions3.forEach((question, Qindex) => {
        const selectedOption = document.querySelector(
            `input[name="question-${Qindex}"]:checked`
        );

        if (selectedOption) {
            selectedAnswers3[Qindex] = selectedOption.value;
        } else {
            selectedAnswers3[Qindex] = null; 
        }
    });

    selectedAnswers3.forEach((selectedAnswer, index) => {
        if (selectedAnswer === questions3[index].answer) {
            score3++;
        }
    });

    console.log(score3);
};
document.getElementById("container3").innerHTML += `
    <iframe width="1004" height="565" src="https://www.youtube.com/embed/2twubyAwTsg" title="L3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`;


questions3.forEach((question, index) => {
    document.getElementById("container3").innerHTML += `
      <h3>${question.question}</h3>
      <div id="options-container3-${index}"></div>
    `;

    question.options.forEach((option, i) => {
        document.getElementById(`options-container3-${index}`).innerHTML += `
            <label>
                <input type="radio" id='${question.answer}' name="question-${index}" value="${option}" onclick='answer3()'/>
                ${option}
            </label><br/>
        `;
    });
});

window.onload = () => {
    renderQuiz3();
};

function renderQuiz3() {
    const isSubmitted3 = localStorage.getItem('checkSubmitted3');
    const savedContent = localStorage.getItem('content3');

    if (isSubmitted3 === 'true' && savedContent) {
        document.getElementById("container3").innerHTML = savedContent;
    }
}

document.getElementById("container3").onsubmit = (e) => {
    e.preventDefault();

    if (selectedAnswers3.includes(null) || selectedAnswers3.length === 0) {
        return;
    }

    const content3 = `
      <h3>درجتك هي ${score3}/${questions3.length}</h3>
      <h3>${Math.round((score3 / questions3.length) * 100)}%</h3>

      ${selectedAnswers3.map((selectedAnswer, i) => {
        const question = questions3[i];
        return `
          <p><b>${question.question}</b></p>
          <p>إجابتك: ${selectedAnswer || 'لم يتم الإجابة على هذا السؤال'}</p>
          <p>${selectedAnswer === question.answer.trim() ? 'إجابة صحيحة ✅' : 'إجابتك خاطئة ❌'}</p>
          <p>${question.desc}</p>
          <br><br>
        `;
      }).join('')}
    `;

    localStorage.setItem('checkSubmitted3', 'true');
    localStorage.setItem('content3', content3);
    document.getElementById("container3").innerHTML = content3;
};

document.querySelector('#container3').innerHTML += `
<button type='submit' class='submit-btn'>انهاء الاختبار الآن</button>
`;

//quiz 4
const questions4 =[
    {
        "id": 1,
        "question": "كان عمر بن الخطاب هو الخليفة الأول للمسلمين.",
        "options": [
            "صواب",
            "خطأ"
        ],
        "answer": "خطأ",
        "desc": "الخليفة الأول هو أبو بكر الصديق، بينما عمر بن الخطاب كان الخليفة الثاني."
    },
    {
        "id": 2,
        "question": "ارتدت بعض القبائل عن الإسلام بعد وفاة الرسول صلى الله عليه وسلم.",
        "options": [
            "صواب",
            "خطأ"
        ],
        "answer": "صواب",
        "desc": "بعد وفاة الرسول صلى الله عليه وسلم، ارتدت بعض القبائل عن الإسلام، فحاربهم أبو بكر الصديق وأعادهم إلى الإسلام."
    },
    {
        "id": 3,
        "question": "أنشأ عمر بن الخطاب الدواوين مثل ديوان الجند وبيت المال.",
        "options": [
            "صواب",
            "خطأ"
        ],
        "answer": "صواب",
        "desc": "عمر بن الخطاب هو الذي أسس الدواوين مثل ديوان الجند وبيت المال لتنظيم شؤون الدولة."
    },
    {
        "id": 4,
        "question": "نقل الخليفة أبو بكر الصديق مقر الخلافة إلى الكوفة بالعراق.",
        "options": [
            "صواب",
            "خطأ"
        ],
        "answer": "خطأ",
        "desc": "الخليفة علي بن أبي طالب هو الذي نقل مقر الخلافة إلى الكوفة بالعراق بعد اتساع الدولة."
    },
    {
        "id": 5,
        "question": "أنفق عثمان بن عفان الكثير من ماله لنصرة الإسلام.",
        "options": [
            "صواب",
            "خطأ"
        ],
        "answer": "صواب",
        "desc": "عثمان بن عفان كان معروفًا بكرمه الكبير، فقد أنفق الكثير من ماله في سبيل الله، مثل تجييش جيش العسرة وتوسيع المسجد النبوي."
    },
    {
        "id": 6,
        "question": "نجح أبو بكر الصديق في إعادة المرتدين إلى الإسلام.",
        "options": [
            "صواب",
            "خطأ"
        ],
        "answer": "صواب",
        "desc": "أبو بكر الصديق نجح في قتال المرتدين الذين رفضوا الإسلام بعد وفاة النبي صلى الله عليه وسلم."
    },
    {
        "id": 7,
        "question": "أنشأ علي بن أبي طالب أول أسطول بحري في الإسلام.",
        "options": [
            "صواب",
            "خطأ"
        ],
        "answer": "خطأ",
        "desc": "عثمان بن عفان هو الذي أنشأ أول أسطول بحري في الإسلام لحماية حدود الشام ومصر."
    },
    {
        "id": 8,
        "question": "استشهد عدد كبير من حفظة القرآن الكريم في حرب المرتدين.",
        "options": [
            "صواب",
            "خطأ"
        ],
        "answer": "صواب",
        "desc": "في حرب المرتدين استشهد العديد من حفظة القرآن، مما دفع أبو بكر الصديق إلى أمر زيد بن ثابت بجمع القرآن."
    },
    {
        "id": 9,
        "question": "عمر بن الخطاب هو الخليفة الثاني للمسلمين.",
        "options": [
            "صواب",
            "خطأ"
        ],
        "answer": "صواب",
        "desc": "عمر بن الخطاب هو الخليفة الثاني بعد أبو بكر الصديق، وكان من أبرز القادة الذين فتحوا العديد من البلدان."
    },
    {
        "id": 10,
        "question": "من الخليفة الذي قام بتوسيع المسجد النبوي في المدينة المنورة؟",
        "options": [
            "أبو بكر الصديق",
            "عمر بن الخطاب",
            "عثمان بن عفان",
            "علي بن أبي طالب"
        ],
        "answer": "عثمان بن عفان",
        "desc": "عثمان بن عفان قام بتوسيع المسجد النبوي في المدينة المنورة ليتمكن المزيد من المسلمين من أداء الصلاة."
    },
    {
        "id": 11,
        "question": "من الخليفة الذي أسس جيش العسرة لتجهيز الجيش لملاقاة الروم؟",
        "options": [
            "أبو بكر الصديق",
            "عمر بن الخطاب",
            "عثمان بن عفان",
            "علي بن أبي طالب"
        ],
        "answer": "عثمان بن عفان",
        "desc": "عثمان بن عفان قام بتجهيز جيش العسرة بنفقة كبيرة عندما أمر النبي صلى الله عليه وسلم بحشد جيش لقتال الروم."
    },
    {
        "id": 12,
        "question": "خصص الخليفة علي بن أبي طالب اليوم لمظالم الناس.",
        "options": [
            "صواب",
            "خطأ"
        ],
        "answer": "صواب",
        "desc": "علي بن أبي طالب كان حريصًا على تحقيق العدالة وكان يخصص يومًا للبت في مظالم الناس."
    },
    {
        "id": 13,
        "question": "من الخليفة الذي جمع القرآن الكريم في مصحف واحد ووزعه على البلاد؟",
        "options": [
            "أبو بكر الصديق",
            "عمر بن الخطاب",
            "عثمان بن عفان",
            "علي بن أبي طالب"
        ],
        "answer": "عثمان بن عفان",
        "desc": "عثمان بن عفان جمع القرآن الكريم في مصحف واحد ووزعه على البلاد لضمان توحيد قراءته."
    },
    {
        "id": 14,
        "question": "من الخليفة الذي وضع التقويم الهجري بداية من هجرة الرسول صلى الله عليه وسلم؟",
        "options": [
            "أبو بكر الصديق",
            "عمر بن الخطاب",
            "عثمان بن عفان",
            "علي بن أبي طالب"
        ],
        "answer": "عمر بن الخطاب",
        "desc": "عمر بن الخطاب هو الذي وضع التقويم الهجري بداية من هجرة الرسول صلى الله عليه وسلم من مكة إلى المدينة."
    },
    {
        "id": 15,
        "question": "من الخليفة الذي قام بتنظيم الشرطة في الدولة الإسلامية؟",
        "options": [
            "أبو بكر الصديق",
            "عمر بن الخطاب",
            "عثمان بن عفان",
            "علي بن أبي طالب"
        ],
        "answer": "علي بن أبي طالب",
        "desc": "علي بن أبي طالب قام بتنظيم الشرطة لضمان الأمن والنظام داخل الدولة الإسلامية."
    }
]


let selectedAnswers4 = [];
let score4 = 0;
let isSubmitted4 = false;

const answer4 = () => {
    score4 = 0;

    questions4.forEach((question, Qindex) => {
        const selectedOption = document.querySelector(
            `input[name="question-${Qindex}"]:checked`
        );

        if (selectedOption) {
            selectedAnswers4[Qindex] = selectedOption.value;
        } else {
            selectedAnswers4[Qindex] = null; 
        }
    });

    selectedAnswers4.forEach((selectedAnswer, index) => {
        if (selectedAnswer === questions4[index].answer) {
            score4++;
        }
    });

    console.log(score4);
};
document.getElementById("container4").innerHTML += `
<iframe width="1005" height="565" src="https://www.youtube.com/embed/2h9-M5u6394" title="L4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`;
questions4.forEach((question, index) => {
    document.getElementById("container4").innerHTML += `
      <h3>${question.question}</h3>
      <div id="options-container4-${index}"></div>
    `;

    question.options.forEach((option, i) => {
        document.getElementById(`options-container4-${index}`).innerHTML += `
            <label>
                <input type="radio" id='${question.answer}' name="question-${index}" value="${option}" onclick='answer4()'/>
                ${option}
            </label><br/>
        `;
    });
});

window.onload = () => {
    renderQuiz4();
};

function renderQuiz4() {
    const isSubmitted4 = localStorage.getItem('checkSubmitted4');
    const savedContent = localStorage.getItem('content4');

    if (isSubmitted4 === 'true' && savedContent) {
        document.getElementById("container4").innerHTML = savedContent;
    }
}

document.getElementById("container4").onsubmit = (e) => {
    e.preventDefault();

    if (selectedAnswers4.includes(null) || selectedAnswers4.length === 0) {
        return;
    }

    const content4 = `
    <iframe width="1005" height="565" src="https://www.youtube.com/embed/2h9-M5u6394" title="L4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>درجتك هي ${score4}/${questions4.length}</h3>
      <h3>${Math.round((score4 / questions4.length) * 100)}%</h3>

      ${selectedAnswers4.map((selectedAnswer, i) => {
        const question = questions4[i];
        return `
        
          <p><b>${question.question}</b></p>
          <p>إجابتك: ${selectedAnswer || 'لم يتم الإجابة على هذا السؤال'}</p>
          <p>${selectedAnswer === question.answer.trim() ? 'إجابة صحيحة ✅' : 'إجابتك خاطئة ❌'}</p>
          <p>${question.desc}</p>
          <br><br>
        `;
      }).join('')}
    `;

    localStorage.setItem('checkSubmitted4', 'true');
    localStorage.setItem('content4', content4);
    document.getElementById("container4").innerHTML = content4;
};

document.querySelector('#container4').innerHTML += `
<button type='submit' class='submit-btn'>انهاء الاختبار الآن</button>
`;

//quiz 5 
const questions5 =[
    {
      "id": 1,
      "question": "ما هو أعلى جبل في الوطن العربي؟",
      "options": ["جبل توبقال", "جبل الأردن", "جبل سينا", "جبل لبنان"],
      "answer": "جبل توبقال",
      "desc": "جبل توبقال في المغرب هو أعلى جبل في الوطن العربي بارتفاع 4167 مترًا فوق سطح البحر."
    }, 
    {
      "id": 2,
      "question": "أين تقع أدنى نقطة في الوطن العربي؟",
      "options": ["البحر الأحمر", "البحر الميت", "البحر المتوسط", "الخليج العربي"],
      "answer": "البحر الميت",
      "desc": "البحر الميت يقع في الأردن وفلسطين، وهو أدنى نقطة في الوطن العربي حيث يقع على عمق 232 مترًا تحت سطح البحر."
    },
    {
      "id": 3,
      "question": "أي من الجبال التالية هو جبل إلتوائي في الوطن العربي؟",
      "options": ["جبال البحر الأحمر", "جبال أطمس", "جبال البحر المتوسط", "جبال زاجروس"],
      "answer": "جبال أطمس",
      "desc": "جبال أطمس هي من الجبال الإلتوائية في المغرب، حيث تشكلت نتيجة حركات باطنية في قشرة الأرض."
    },
    {
      "id": 4,
      "question": "أين توجد واحة سيوة؟",
      "options": ["في مصر", "في ليبيا", "في الجزائر", "في السعودية"],
      "answer": "في مصر",
      "desc": "واحة سيوة هي واحدة من أشهر الواحات في مصر، وتقع في الصحراء الغربية بالقرب من الحدود مع ليبيا."
    },
    {
      "id": 5,
      "question": "أي من الظواهر التالية تكونت بسبب التعرية المائية؟",
      "options": ["الأودية الجافة", "الجبال الإلتوائية", "السهول الساحلية", "السهول الفيضية"],
      "answer": "الأودية الجافة",
      "desc": "الأودية الجافة تتكون نتيجة للتعرية المائية التي تؤثر على الأرض، على الرغم من أنها لا تحتوي على مياه دائمة."
    },
    {
      "id": 6,
      "question": "ما هو أكبر التضاريس المساحة في الجناح الأفريقي للوطن العربي؟",
      "options": ["جبال البحر الأحمر", "الهضبة الإفريقية الشمالية", "الهضبة العربية", "سلاسل جبال الحجاز"],
      "answer": "الهضبة الإفريقية الشمالية",
      "desc": "الهضبة الإفريقية الشمالية هي أكبر ظاهرة تضاريسية في الجناح الأفريقي للوطن العربي، تمتد من البحر الأحمر شرقًا إلى المحيط الأطلسي غربًا."
    },
    {
      "id": 7,
      "question": "أي من الجبال التالية يتكون نتيجة لحركات انكسارية؟",
      "options": ["جبال أطمس", "جبال البحر الأحمر", "جبال كردستان", "جبال لبنان"],
      "answer": "جبال البحر الأحمر",
      "desc": "جبال البحر الأحمر تتكون نتيجة لحركات انكسارية في قشرة الأرض."
    },
    {
      "id": 8,
      "question": "أي من السيول التالية تتميز بكثرة الأمطار الشتوية؟",
      "options": ["السيول الفيضية", "السيول الساحلية", "السيول الجافة", "السيول في وادي النيل"],
      "answer": "السيول الساحلية",
      "desc": "السيول الساحلية تتميز بكثرة الأمطار الشتوية، مما يساهم في فيضان الأنهار المجاورة."
    },
    {
      "id": 9,
      "question": "ما هي أسباب تكوين السيول الفيضية؟",
      "options": ["الأمطار الصيفية", "الرياح الصحراوية", "ترسيب المواد العالقة بالمياه", "التعرية المائية"],
      "answer": "ترسيب المواد العالقة بالمياه",
      "desc": "السيول الفيضية تتكون بسبب الأمطار الغزيرة التي تترسب خلالها المواد العالقة بالمياه، مما يؤدي إلى تكوين الأنهار الطميية."
    },
    {
      "id": 10,
      "question": "أي من الأودية التالية يتم استخدامه كطرق مواصلات؟",
      "options": ["وادي الجرير", "وادي النيل", "وادي النيل الأبيض", "وادي النيل الأزرق"],
      "answer": "وادي النيل",
      "desc": "وادي النيل يُستخدم كطريق مواصلات رئيسي بين مصر والسودان، ويعتبر من الأودية الهامة في المنطقة."
    },
    {
      "id": 11,
      "question": "البحر الميت هو أعلى نقطة في الوطن العربي.",
      "options": ["صح", "خطأ"],
      "answer": "خطأ",
      "desc": "البحر الميت هو أدنى نقطة في الوطن العربي، حيث يقع على عمق 232 مترًا تحت سطح البحر."
    },
    {
      "id": 12,
      "question": "الجبال الإلتوائية تتكون نتيجة لحركات باطنية في قشرة الأرض.",
      "options": ["صح", "خطأ"],
      "answer": "صح",
      "desc": "الجبال الإلتوائية تتكون نتيجة لضغط الأرض وحركاتها الباطنية التي تؤدي إلى انثناءات في قشرة الأرض."
    },
    {
      "id": 13,
      "question": "الأودية الجافة تتكون بسبب الأمطار الغزيرة.",
      "options": ["صح", "خطأ"],
      "answer": "خطأ",
      "desc": "الأودية الجافة تتكون نتيجة للتعرية المائية، لكنها لا تحتوي على مياه دائمة، وتكون جافة معظم الوقت."
    },
    {
      "id": 14,
      "question": "السيول الساحلية في البحر الأحمر تتميز بالثروات المعدنية مثل الحديد والنحاس.",
      "options": ["صح", "خطأ"],
      "answer": "صح",
      "desc": "السيول في البحر الأحمر تتميز بوجود الثروات المعدنية مثل الحديد والنحاس، بالإضافة إلى وجود مصادر الطاقة مثل النفط."
    },
    {
      "id": 15,
      "question": "الهضبة الإفريقية الشمالية تمتد من البحر الأحمر إلى المحيط الأطلسي.",
      "options": ["صح", "خطأ"],
      "answer": "صح",
      "desc": "الهضبة الإفريقية الشمالية تمتد بين البحر الأحمر شرقًا والمحيط الأطلسي غربًا."
    }
  ]
  let selectedAnswers5 = [];
let score5 = 0;
let isSubmitted5 = false;

const answer5 = () => {
    score5 = 0;

    questions5.forEach((question, Qindex) => {
        const selectedOption = document.querySelector(
            `input[name="question-${Qindex}"]:checked`
        );

        if (selectedOption) {
            selectedAnswers5[Qindex] = selectedOption.value;
        } else {
            selectedAnswers5[Qindex] = null; 
        }
    });

    selectedAnswers5.forEach((selectedAnswer, index) => {
        if (selectedAnswer === questions5[index].answer) {
            score5++;
        }
    });

    console.log(score5);
};
document.getElementById("container5").innerHTML += `
    <iframe width="1004" height="565" src="https://www.youtube.com/embed/q0wSRbWAAsc" title="L5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`;

questions5.forEach((question, index) => {
    document.getElementById("container5").innerHTML += `
      <h3>${question.question}</h3>
      <div id="options-container5-${index}"></div>
    `;

    question.options.forEach((option, i) => {
        document.getElementById(`options-container5-${index}`).innerHTML += `
            <label>
                <input type="radio" id='${question.answer}' name="question-${index}" value="${option}" onclick='answer5()'/>
                ${option}
            </label><br/>
        `;
    });
});

window.onload = () => {
    renderQuiz5();
};

function renderQuiz5() {
    const isSubmitted5 = localStorage.getItem('checkSubmitted5');
    const savedContent = localStorage.getItem('content5');

    if (isSubmitted5 === 'true' && savedContent) {
        document.getElementById("container5").innerHTML = savedContent;
    }
}

document.getElementById("container5").onsubmit = (e) => {
    e.preventDefault();

    if (selectedAnswers5.includes(null) || selectedAnswers5.length === 0) {
        return;
    }

    const content5 = `
    <iframe width="1004" height="565" src="https://www.youtube.com/embed/q0wSRbWAAsc" title="L5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>درجتك هي ${score5}/${questions5.length}</h3>
      <h3>${Math.round((score5 / questions5.length) * 100)}%</h3>

      ${selectedAnswers5.map((selectedAnswer, i) => {
        const question = questions5[i];
        return `
          <p><b>${question.question}</b></p>
          <p>إجابتك: ${selectedAnswer || 'لم يتم الإجابة على هذا السؤال'}</p>
          <p>${selectedAnswer === question.answer.trim() ? 'إجابة صحيحة ✅' : 'إجابتك خاطئة ❌'}</p>
          <p>${question.desc}</p>
          <br><br>
        `;
      }).join('')}
    `;

    localStorage.setItem('checkSubmitted5', 'true');
    localStorage.setItem('content5', content5);
    document.getElementById("container5").innerHTML = content5;
};

document.querySelector('#container5').innerHTML += `
<button type='submit' class='submit-btn'>انهاء الاختبار الآن</button>
`;

//quiz 6
const questions6 =[
    {
        "id": 1,
        "question": "ما هو العامل الرئيسي الذي يؤثر على مناخ الوطن العربي؟",
        "options": ["الموقع الفلكي", "نوع التربة", "نوع النباتات", "تلوث الهواء"],
        "answer": "الموقع الفلكي",
        "desc": "الموقع الفلكي يؤثر بشكل رئيسي على المناخ من حيث تحديد درجات الحرارة والفصول المناخية، خاصة من خلال موقع الوطن العربي بين خط الاستواء والمدارين."
    },
    {
        "id": 2,
        "question": "أي من العوامل التالية يؤدي إلى تعديل درجات الحرارة في المناطق الساحلية؟",
        "options": ["التيارات البحرية الدافئة", "التيارات البحرية الباردة", "التضاريس الجبلية", "ارتفاعات القمر"],
        "answer": "التيارات البحرية الباردة",
        "desc": "التيارات البحرية الباردة تعمل على تقليل درجات الحرارة في السواحل، مما يجعل المناخ أكثر اعتدالًا مقارنة بالمناطق الداخلية."
    },
    {
        "id": 3,
        "question": "ما هو التأثير المتوقع إذا مرت الرياح الحارة من مناطق صحراوية على المنطقة؟",
        "options": ["زيادة الأمطار", "انخفاض درجات الحرارة", "ارتفاع درجات الحرارة", "زيادة الرطوبة"],
        "answer": "ارتفاع درجات الحرارة",
        "desc": "الرياح الحارة القادمة من الصحارى تؤدي إلى رفع درجات الحرارة في المناطق التي تمر بها."
    },
    {
        "id": 4,
        "question": "أي من المدن التالية تتمتع بمناخ معتدل بسبب قربها من البحر؟",
        "options": ["الرياض", "القاهرة", "الإسكندرية", "بغداد"],
        "answer": "الإسكندرية",
        "desc": "مدينة الإسكندرية تتمتع بمناخ معتدل بسبب قربها من البحر المتوسط، مما يساعد على تعديل درجات الحرارة."
    },
    {
        "id": 5,
        "question": "في أي فصل من السنة تتعامد الشمس على مدار السرطان؟",
        "options": ["الربيع", "الصيف", "الخريف", "الشتاء"],
        "answer": "الصيف",
        "desc": "في الصيف، تتعامد الشمس على مدار السرطان، مما يؤدي إلى ارتفاع درجات الحرارة في معظم أنحاء الوطن العربي."
    },
    {
        "id": 6,
        "question": "ما الذي يسبب حدوث الأمطار في المناطق الجبلية؟",
        "options": ["تأثير الرياح المحملة بالبخار", "السحب الرعدية", "حركة التيارات البحرية", "تلوث الهواء"],
        "answer": "تأثير الرياح المحملة بالبخار",
        "desc": "الأمطار في المناطق الجبلية تحدث عندما تصطدم الرياح المحملة بالبخار بالجبال، مما يؤدي إلى تكثف البخار وتساقط الأمطار."
    },
    {
        "id": 7,
        "question": "أي من العوامل التالية لا يؤثر بشكل كبير في مناخ الوطن العربي؟",
        "options": ["المسطحات المائية", "الموقع الفلكي", "اتجاه الرياح", "الكثافة السكانية"],
        "answer": "الكثافة السكانية",
        "desc": "الكثافة السكانية ليست عاملًا مؤثرًا كبيرًا على المناخ بالمقارنة مع العوامل الأخرى مثل الموقع الفلكي واتجاه الرياح."
    },
    {
        "id": 8,
        "question": "في أي فصل تتعامد الشمس على مدار الجدي؟",
        "options": ["الخريف", "الشتاء", "الربيع", "الصيف"],
        "answer": "الشتاء",
        "desc": "الشمس تتعامد على مدار الجدي في فصل الشتاء، مما يؤدي إلى اعتدال الحرارة في معظم مناطق الوطن العربي."
    },
    {
        "id": 9,
        "question": "تعتبر مدينة الرياض أكثر حرارة من مدينة الإسكندرية بسبب بعد الرياض عن البحر.",
        "options": ["صحيح", "خطأ"],
        "answer": "صحيح",
        "desc": "مدينة الرياض هي مدينة داخلية بعيدًا عن تأثير المسطحات المائية، مما يجعلها أكثر حرارة مقارنة بالإسكندرية التي تتمتع بمناخ معتدل بفضل قربها من البحر المتوسط."
    },
    {
        "id": 10,
        "question": "المناخ في معظم مناطق الوطن العربي معتدل طوال العام.",
        "options": ["صحيح", "خطأ"],
        "answer": "خطأ",
        "desc": "المناخ في معظم مناطق الوطن العربي حار في الصيف، بينما يكون معتدلًا في الشتاء فقط في بعض المناطق الشمالية والجبلية."
    },
    {
        "id": 11,
        "question": "ما هو العامل الذي يسبب ارتفاع درجة الحرارة في معظم مناطق الوطن العربي؟",
        "options": ["التيارات البحرية الباردة", "الموقع الفلكي", "الكثافة السكانية", "التضاريس الجبلية"],
        "answer": "الموقع الفلكي",
        "desc": "الموقع الفلكي للوطن العربي، بين خط الاستواء ومدار السرطان، يسبب ارتفاع درجات الحرارة."
    },
    {
        "id": 12,
        "question": "أي من العوامل التالية لا يُؤثر بشكل كبير على مناخ الوطن العربي؟",
        "options": ["المسطحات المائية", "التيارات البحرية", "الزراعة", "التضاريس الجبلية"],
        "answer": "الزراعة",
        "desc": "الزراعة لا تُعتبر عاملًا مؤثرًا في مناخ الوطن العربي بشكل عام، بينما تؤثر المسطحات المائية، التيارات البحرية، والتضاريس بشكل ملحوظ."
    },
    {
        "id": 13,
        "question": "أي من المدن التالية تشهد مناخًا حارًا وجافًا في الصيف؟",
        "options": ["الرياض", "بيروت", "القاهرة", "الجزائر"],
        "answer": "الرياض",
        "desc": "الرياض هي مدينة داخلية تشهد مناخًا حارًا وجافًا في الصيف، في حين أن المدن الساحلية مثل بيروت والقاهرة تتمتع بمناخ أكثر اعتدالًا."
    },
    {
        "id": 14,
        "question": "ما هو تأثير الرياح القادمة من البحر على المناطق الساحلية؟",
        "options": ["رفع درجات الحرارة", "انخفاض درجات الحرارة", "زيادة الرطوبة", "تقليل الرطوبة"],
        "answer": "انخفاض درجات الحرارة",
        "desc": "الرياح القادمة من البحر تساعد على تقليل درجات الحرارة وزيادة الرطوبة، مما يجعل المناخ أكثر اعتدالًا في المناطق الساحلية."
    },
    {
        "id": 15,
        "question": "أي من الجبال التالية يشهد تساقط الثلوج في الشتاء؟",
        "options": ["جبال البحر الأحمر", "جبال أطلس في المغرب", "جبال عمان", "جبال لبنان"],
        "answer": "جبال أطلس في المغرب",
        "desc": "جبال أطلس تشهد تساقط الثلوج في الشتاء بسبب ارتفاعها الكبير فوق سطح البحر، بينما المناخ في معظم المناطق الأخرى من الوطن العربي لا يسمح بتساقط الثلوج."
    }
]



let selectedAnswers6 = [];
let score6 = 0;
let isSubmitted6 = false;

const answer6 = () => {
    score6 = 0;

    questions6.forEach((question, Qindex) => {
        const selectedOption = document.querySelector(
            `input[name="question-${Qindex}"]:checked`
        );

        if (selectedOption) {
            selectedAnswers6[Qindex] = selectedOption.value;
        } else {
            selectedAnswers6[Qindex] = null; 
        }
    });

    selectedAnswers6.forEach((selectedAnswer, index) => {
        if (selectedAnswer === questions6[index].answer) {
            score6++;
        }
    });

    console.log(score6);
};
document.getElementById("container6").innerHTML += `
<iframe width="1004" height="565" src="https://www.youtube.com/embed/ARY7xacGCjc" title="L6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`;
questions6.forEach((question, index) => {
    document.getElementById("container6").innerHTML += `
      <h3>${question.question}</h3>
      <div id="options-container6-${index}"></div>
    `;

    question.options.forEach((option, i) => {
        document.getElementById(`options-container6-${index}`).innerHTML += `
            <label>
                <input type="radio" id='${question.answer}' name="question-${index}" value="${option}" onclick='answer6()'/>
                ${option}
            </label><br/>
        `;
    });
});

window.onload = () => {
    renderQuiz6();
};

function renderQuiz6() {
    const isSubmitted6 = localStorage.getItem('checkSubmitted6');
    const savedContent = localStorage.getItem('content6');

    if (isSubmitted6 === 'true' && savedContent) {
        document.getElementById("container6").innerHTML = savedContent;
    }
}

document.getElementById("container6").onsubmit = (e) => {
    e.preventDefault();

    if (selectedAnswers6.includes(null) || selectedAnswers6.length === 0) {
        return;
    }

    const content6 = `
    <iframe width="1004" height="565" src="https://www.youtube.com/embed/ARY7xacGCjc" title="L6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>درجتك هي ${score6}/${questions6.length}</h3>
      <h3>${Math.round((score6 / questions6.length) * 100)}%</h3>

      ${selectedAnswers6.map((selectedAnswer, i) => {
        const question = questions6[i];
        return `
          <p><b>${question.question}</b></p>
          <p>إجابتك: ${selectedAnswer || 'لم يتم الإجابة على هذا السؤال'}</p>
          <p>${selectedAnswer === question.answer.trim() ? 'إجابة صحيحة ✅' : 'إجابتك خاطئة ❌'}</p>
          <p>${question.desc}</p>
          <br><br>
        `;
      }).join('')}
    `;

    localStorage.setItem('checkSubmitted6', 'true');
    localStorage.setItem('content6', content6);
    document.getElementById("container6").innerHTML = content6;
};

document.querySelector('#container6').innerHTML += `
<button type='submit' class='submit-btn'>انهاء الاختبار الآن</button>
`;
//quiz 7
const questions7 = [
    {
        id: 1,
        question: "ما هو المناخ الذي يتميز بتساقط الأمطار في فصل الشتاء؟",
        options: [
            "الإقليم المداري",
            "الإقليم الصحراوي",
            "الإقليم البحر الأبيض المتوسط",
            "الإقليم الاستوائي"
        ],
        answer: "الإقليم البحر الأبيض المتوسط",
        desc: "الإقليم البحر الأبيض المتوسط يتميز بمناخ جاف وحار في الصيف، ودافئ ممطر في الشتاء."
    },
    {
        id: 2,
        question: "أي من الأقاليم المناخية في الوطن العربي يتسم بحرارة شديدة في الصيف قد تصل إلى 50°C؟",
        options: [
            "الإقليم المداري",
            "الإقليم الصحراوي",
            "الإقليم البحر الأبيض المتوسط",
            "الإقليم الاستوائي"
        ],
        answer: "الإقليم الصحراوي",
        desc: "الإقليم الصحراوي يتميز بدرجات حرارة مرتفعة للغاية في الصيف قد تصل إلى 50 درجة مئوية أو أكثر."
    },
    {
        id: 3,
        question: "أي من النباتات التالية ينمو في الإقليم الصحراوي؟",
        options: [
            "الزيتون",
            "الصبار",
            "الأرز",
            "الأرز"
        ],
        answer: "الصبار",
        desc: "الصبار هو نبات يتحمل الظروف القاسية والجفاف في الإقليم الصحراوي."
    },
    {
        id: 4,
        question: "أين ينمو نبات الزيتون بشكل رئيسي في الوطن العربي؟",
        options: [
            "في الإقليم المداري",
            "في الإقليم الصحراوي",
            "في الإقليم البحر الأبيض المتوسط",
            "في الإقليم الاستوائي"
        ],
        answer: "في الإقليم البحر الأبيض المتوسط",
        desc: "الزيتون ينمو بشكل رئيسي في مناطق ذات مناخ البحر الأبيض المتوسط الذي يتسم بالصيف الجاف والشتاء الممطر."
    },
    {
        id: 5,
        question: "أي من الأقاليم المناخية في الوطن العربي يميز مناخًا حارًا وجافًا طوال العام؟",
        options: [
            "الإقليم المداري",
            "الإقليم الصحراوي",
            "الإقليم البحر الأبيض المتوسط",
            "الإقليم الاستوائي"
        ],
        answer: "الإقليم الصحراوي",
        desc: "الإقليم الصحراوي يشهد مناخًا حارًا وجافًا طوال العام مع برودة شديدة في الشتاء وحرارة شديدة في الصيف."
    },
    {
        id: 6,
        question: "أي من الحيوانات التالية تعيش في الإقليم الصحراوي؟",
        options: [
            "الزرافة",
            "النمر",
            "الثعلب الصحراوي",
            "الفيل"
        ],
        answer: "الثعلب الصحراوي",
        desc: "الثعلب الصحراوي هو من الحيوانات المتكيفة مع البيئة الصحراوية التي تتحمل درجات الحرارة المرتفعة."
    },
    {
        id: 7,
        question: "أي من المحميات الطبيعية توجد في لبنان؟",
        options: [
            "محمية جبل علبة",
            "محمية أرز الشوف",
            "محمية ضانا",
            "محمية النقب"
        ],
        answer: "محمية أرز الشوف",
        desc: "محمية أرز الشوف هي من أبرز المحميات الطبيعية في لبنان التي تهدف إلى حماية أشجار الأرز."
    },
    {
        id: 8,
        question: "ما هو المناخ السائد في الإقليم المداري؟",
        options: [
            "حار جاف",
            "معتدل ممطر",
            "حار ممطر",
            "بارد شتاءً"
        ],
        answer: "حار ممطر",
        desc: "الإقليم المداري يتميز بمناخ حار ممطر في الصيف مع موسم جاف في الشتاء."
    },
    {
        id: 9,
        question: "أي من الأقاليم المناخية في الوطن العربي يشمل مناطق مثل اليمن والصومال؟",
        options: [
            "الإقليم المداري",
            "الإقليم الصحراوي",
            "الإقليم البحر الأبيض المتوسط",
            "الإقليم الاستوائي"
        ],
        answer: "الإقليم المداري",
        desc: "الإقليم المداري يشمل مناطق تقع في جنوب الوطن العربي مثل اليمن والصومال."
    },
    {
        id: 10,
        question: "أي من النباتات التالية ينمو في الإقليم المداري؟",
        options: [
            "الزيتون",
            "الصبار",
            "حشائش السافانا",
            "الأرز"
        ],
        answer: "حشائش السافانا",
        desc: "حشائش السافانا تنمو في الإقليم المداري حيث يتوفر المناخ الحار والممطر."
    },
    {
        id: 11,
        question: "ما هي أهمية المحميات الطبيعية في الوطن العربي؟",
        options: [
            "حماية الأنواع المهددة بالانقراض",
            "تعزيز الأنشطة السياحية",
            "الحفاظ على التنوع البيولوجي",
            "جميع ما ذكر"
        ],
        answer: "جميع ما ذكر",
        desc: "المحميات الطبيعية تلعب دورًا في حماية الحياة البرية، تعزيز السياحة البيئية، والحفاظ على التنوع البيولوجي."
    },
    {
        id: 12,
        question: "أي من الأقاليم المناخية في الوطن العربي يتسم بمناخ جاف وحار في الصيف ودافئ ممطر في الشتاء؟",
        options: [
            "الإقليم الصحراوي",
            "الإقليم البحر الأبيض المتوسط",
            "الإقليم المداري",
            "الإقليم الاستوائي"
        ],
        answer: "الإقليم البحر الأبيض المتوسط",
        desc: "الإقليم البحر الأبيض المتوسط يتميز بمناخ جاف وحار في الصيف، ودافئ ممطر في الشتاء."
    },
    {
        id: 13,
        question: "أين يوجد الإقليم الصحراوي في الوطن العربي؟",
        options: [
            "في شمال غرب الوطن العربي",
            "في جنوب شرق الوطن العربي",
            "في جنوب الوطن العربي",
            "في جميع أنحاء الوطن العربي"
        ],
        answer: "في جميع أنحاء الوطن العربي",
        desc: "الإقليم الصحراوي يمتد عبر معظم أنحاء الوطن العربي، بما في ذلك الصحراء الكبرى والصحراء العربية."
    },
    {
        id: 14,
        question: "أي من المحميات الطبيعية تقع في الأردن؟",
        options: [
            "محمية جبل علبة",
            "محمية ضانا",
            "محمية النقب",
            "محمية أرز الشوف"
        ],
        answer: "محمية ضانا",
        desc: "محمية ضانا في الأردن تعتبر من أبرز المحميات الطبيعية في المنطقة."
    },
    {
        id: 15,
        question: "أي من الأشجار التالية تنمو في الإقليم البحر الأبيض المتوسط؟",
        options: [
            "أشجار الأرز",
            "أشجار النخيل",
            "أشجار السافانا",
            "أشجار الصبار"
        ],
        answer: "أشجار الأرز",
        desc: "أشجار الأرز هي واحدة من الأشجار التي تنمو بشكل رئيسي في الإقليم البحر الأبيض المتوسط."
    }
];


let selectedAnswers7 = [];
let score7 = 0;
let isSubmitted7 = false;

const answer7 = () => {
    score7 = 0;

    questions7.forEach((question, Qindex) => {
        const selectedOption = document.querySelector(
            `input[name="question-${Qindex}"]:checked`
        );

        if (selectedOption) {
            selectedAnswers7[Qindex] = selectedOption.value;
        } else {
            selectedAnswers7[Qindex] = null; 
        }
    });

    selectedAnswers7.forEach((selectedAnswer, index) => {
        if (selectedAnswer === questions7[index].answer) {
            score7++;
        }
    });

    console.log(score7);
};
document.getElementById("container7").innerHTML += `
    <iframe width="1004" height="565" src="https://www.youtube.com/embed/LzdgX_2EajA" title="L7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`;

questions7.forEach((question, index) => {
    document.getElementById("container7").innerHTML += `
      <h3>${question.question}</h3>
      <div id="options-container7-${index}"></div>
    `;

    question.options.forEach((option, i) => {
        document.getElementById(`options-container7-${index}`).innerHTML += `
            <label>
                <input type="radio" id='${question.answer}' name="question-${index}" value="${option}" onclick='answer7()'/>
                ${option}
            </label><br/>
        `;
    });
});

window.onload = () => {
    renderQuiz7();
};

function renderQuiz7() {
    const isSubmitted7 = localStorage.getItem('checkSubmitted7');
    const savedContent = localStorage.getItem('content7');

    if (isSubmitted7 === 'true' && savedContent) {
        document.getElementById("container7").innerHTML = savedContent;
    }
}

document.getElementById("container7").onsubmit = (e) => {
    e.preventDefault();

    if (selectedAnswers7.includes(null) || selectedAnswers7.length === 0) {
        return;
    }

    const content7 = `
    <iframe width="1004" height="565" src="https://www.youtube.com/embed/LzdgX_2EajA" title="L7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>درجتك هي ${score7}/${questions7.length}</h3>
      <h3>${Math.round((score7 / questions7.length) * 100)}%</h3>

      ${selectedAnswers7.map((selectedAnswer, i) => {
        const question = questions7[i];
        return `
          <p><b>${question.question}</b></p>
          <p>إجابتك: ${selectedAnswer || 'لم يتم الإجابة على هذا السؤال'}</p>
          <p>${selectedAnswer === question.answer.trim() ? 'إجابة صحيحة ✅' : 'إجابتك خاطئة ❌'}</p>
          <p>${question.desc}</p>
          <br><br>
        `;
      }).join('')}
    `;

    localStorage.setItem('checkSubmitted7', 'true');
    localStorage.setItem('content7', content7);
    document.getElementById("container7").innerHTML = content7;
};

document.querySelector('#container7').innerHTML += `
<button type='submit' class='submit-btn'>انهاء الاختبار الآن</button>
`;
//quiz 8
const questions8 = [
    {
        id: 1,
        question: "ما هي أهم أسباب ظاهرة الجفاف في الوطن العربي؟",
        options: [
            "زيادة الأمطار",
            "ارتفاع درجات الحرارة",
            "نقص المياه الجوفية",
            "زيادة المساحات الخضراء"
        ],
        answer: "ارتفاع درجات الحرارة",
        desc: "التغيرات المناخية، وارتفاع درجات الحرارة، هما العاملان الرئيسيان في زيادة معدلات الجفاف في الوطن العربي."
    },
    {
        id: 2,
        question: "ما هو التصحر؟",
        options: [
            "نقص الأمطار فقط",
            "تدهور الأراضي الزراعية",
            "زيادة نمو الغابات",
            "ازدياد درجة الحرارة"
        ],
        answer: "تدهور الأراضي الزراعية",
        desc: "التصحر يعني تدهور الأراضي الزراعية، مما يؤدي إلى فقدان القدرة على الإنتاج الزراعي بسبب عدة عوامل منها الجفاف والإفراط في استخدام المياه."
    },
    {
        id: 3,
        question: "أي من هذه الدول العربية يعاني بشكل رئيسي من نقص المياه العذبة؟",
        options: [
            "مصر",
            "السودان",
            "العراق",
            "البحرين"
        ],
        answer: "البحرين",
        desc: "البحرين هي واحدة من الدول التي تعاني من نقص المياه العذبة بسبب جغرافيا المنطقة واعتمادها على تحلية المياه."
    },
    {
        id: 4,
        question: "ما هي إحدى حلول التصحر في الوطن العربي؟",
        options: [
            "زيادة التوسع العمراني",
            "بناء سدود لتخزين المياه",
            "الإفراط في استخدام الأسمدة",
            "تشجير المناطق الصحراوية"
        ],
        answer: "تشجير المناطق الصحراوية",
        desc: "التشجير يساعد في الحد من التصحر من خلال تقليل تأثير الرياح وحفظ التربة."
    },
    {
        id: 5,
        question: "أي من هذه المشاريع البيئية تم إطلاقه في المملكة العربية السعودية؟",
        options: [
            "مدينة نيوم",
            "مدينة العين",
            "مدينة الكويت",
            "مدينة الدوحة"
        ],
        answer: "مدينة نيوم",
        desc: "نيوم هي مدينة ذكية في السعودية تهدف إلى استخدام تقنيات حديثة وتحقيق التنمية المستدامة."
    },
    {
        id: 6,
        question: "ما هو السبب الرئيسي وراء الجفاف في الصومال؟",
        options: [
            "زيادة الري",
            "نقص الأمطار",
            "الإفراط في استخدام المياه الجوفية",
            "تدهور التربة"
        ],
        answer: "نقص الأمطار",
        desc: "الصومال يعاني من نقص الأمطار السنوي بسبب التغيرات المناخية، ما يؤدي إلى فترات جفاف طويلة."
    },
    {
        id: 7,
        question: "ما هو الغرض من إنشاء المدن الذكية؟",
        options: [
            "زيادة الازدحام المروري",
            "تقليل استهلاك الطاقة",
            "زيادة إنتاج الزراعة",
            "تدمير الحياة البيئية"
        ],
        answer: "تقليل استهلاك الطاقة",
        desc: "المدن الذكية تهدف إلى استخدام تقنيات مستدامة لتقليل استهلاك الطاقة وتقليل الأثر البيئي."
    },
    {
        id: 8,
        question: "أين تم إطلاق مبادرة لزراعة 122 مليون شجرة مثمرة؟",
        options: [
            "مصر",
            "الأردن",
            "الإمارات",
            "السعودية"
        ],
        answer: "مصر",
        desc: "مصر أطلقت مبادرة لزراعة 122 مليون شجرة مثمرة في إطار جهودها لمكافحة التغيرات المناخية."
    },
    {
        id: 9,
        question: "ما هي إحدى الأسباب الرئيسية لمشكلة التصحر في الدول العربية؟",
        options: [
            "الرعي الجائر",
            "زراعة المحاصيل المقاومة للجفاف",
            "زيادة الأمطار",
            "زيادة الثروة الحيوانية"
        ],
        answer: "الرعي الجائر",
        desc: "الرعي الجائر يؤدي إلى تدهور التربة وفقدان النباتات التي تحافظ على التربة من الانجراف، مما يزيد من التصحر."
    },
    {
        id: 10,
        question: "ما هي إحدى آثار التصحر على الحياة النباتية؟",
        options: [
            "زيادة النباتات",
            "تدهور الغطاء النباتي",
            "زيادة الغابات",
            "تحسن التربة"
        ],
        answer: "تدهور الغطاء النباتي",
        desc: "التصحر يؤدي إلى تدهور الغطاء النباتي وفقدان التنوع البيولوجي."
    },
    {
        id: 11,
        question: "ما هو دور المياه الجوفية في مشكلة ندرة المياه؟",
        options: [
            "المساعدة في زيادة الأمطار",
            "توفير مياه إضافية للزراعة",
            "تهديد مصادر المياه العذبة",
            "تحسين نوعية المياه"
        ],
        answer: "تهديد مصادر المياه العذبة",
        desc: "الإفراط في استخدام المياه الجوفية يؤدي إلى استنزافها بشكل غير مستدام، مما يقلل من مصادر المياه العذبة."
    },
    {
        id: 12,
        question: "أي من هذه العوامل لا يساهم في التصحر؟",
        options: [
            "قلة الأمطار",
            "التوسع العمراني",
            "الرعي الجائر",
            "الأمطار الغزيرة"
        ],
        answer: "الأمطار الغزيرة",
        desc: "الأمطار الغزيرة لا تساهم في التصحر، بل يمكن أن تكون مفيدة للنباتات، بينما قلة الأمطار تساهم في تفاقم التصحر."
    },
    {
        id: 13,
        question: "أي من هذه المبادرات تهدف إلى تقليل التلوث البيئي؟",
        options: [
            "زراعة الأشجار المثمرة",
            "استخدام الوقود الأحفوري",
            "زيادة عدد السيارات",
            "إزالة الغابات"
        ],
        answer: "زراعة الأشجار المثمرة",
        desc: "زراعة الأشجار المثمرة تساهم في تحسين جودة الهواء وتقليل انبعاثات الكربون."
    },
    {
        id: 14,
        question: "ما هي نتائج زيادة معدلات استهلاك المياه في الوطن العربي؟",
        options: [
            "زيادة كمية الأمطار",
            "استنزاف الموارد المائية",
            "تحسن الزراعة",
            "زيادة عدد الأنهار"
        ],
        answer: "استنزاف الموارد المائية",
        desc: "زيادة استهلاك المياه في الوطن العربي يؤدي إلى استنزاف الموارد المائية الجوفية والسطحية، مما يفاقم أزمة المياه."
    },
    {
        id: 15,
        question: "أين تم إنشاء أول مدينة صديقة للبيئة في مصر؟",
        options: [
            "القاهرة",
            "الإسكندرية",
            "الخارجة",
            "سوهاج"
        ],
        answer: "الخارجة",
        desc: "مدينة الخارجة في الوادي الجديد كانت أول مدينة صديقة للبيئة في مصر، حيث أُطلقت مشروعات بيئية لإعادة تدوير المخلفات."
    }
];
let selectedAnswers8 = [];
let score8 = 0;
let isSubmitted8 = false;

const answer8 = () => {
    score8 = 0;

    questions8.forEach((question, Qindex) => {
        const selectedOption = document.querySelector(
            `input[name="question-${Qindex}"]:checked`
        );

        if (selectedOption) {
            selectedAnswers8[Qindex] = selectedOption.value;
        } else {
            selectedAnswers8[Qindex] = null; 
        }
    });

    selectedAnswers8.forEach((selectedAnswer, index) => {
        if (selectedAnswer === questions8[index].answer) {
            score8++;
        }
    });

    console.log(score8);
};
document.getElementById("container8").innerHTML += `
<iframe width="928" height="522" src="https://www.youtube.com/embed/GjtGO4e0udY" title="L8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`;

questions8.forEach((question, index) => {
    document.getElementById("container8").innerHTML += `
      <h3>${question.question}</h3>
      <div id="options-container8-${index}"></div>
    `;

    question.options.forEach((option, i) => {
        document.getElementById(`options-container8-${index}`).innerHTML += `
            <label>
                <input type="radio" id='${question.answer}' name="question-${index}" value="${option}" onclick='answer8()'/>
                ${option}
            </label><br/>
        `;
    });
});

window.onload = () => {
    renderQuiz8();
};

function renderQuiz8() {
    const isSubmitted8 = localStorage.getItem('checkSubmitted8');
    const savedContent = localStorage.getItem('content8');

    if (isSubmitted8 === 'true' && savedContent) {
        document.getElementById("container8").innerHTML = savedContent;
    }
}

document.getElementById("container8").onsubmit = (e) => {
    e.preventDefault();

    if (selectedAnswers8.includes(null) || selectedAnswers8.length === 0) {
        return;
    }

    const content8 = `
    <iframe width="928" height="522" src="https://www.youtube.com/embed/GjtGO4e0udY" title="L8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>درجتك هي ${score8}/${questions8.length}</h3>
      <h3>${Math.round((score8 / questions8.length) * 100)}%</h3>

      ${selectedAnswers8.map((selectedAnswer, i) => {
        const question = questions8[i];
        return `
          <p><b>${question.question}</b></p>
          <p>إجابتك: ${selectedAnswer || 'لم يتم الإجابة على هذا السؤال'}</p>
          <p>${selectedAnswer === question.answer.trim() ? 'إجابة صحيحة ✅' : 'إجابتك خاطئة ❌'}</p>
          <p>${question.desc}</p>
          <br><br>
        `;
      }).join('')}
    `;

    localStorage.setItem('checkSubmitted8', 'true');
    localStorage.setItem('content8', content8);
    document.getElementById("container8").innerHTML = content8;
};

document.querySelector('#container8').innerHTML += `
<button type='submit' class='submit-btn'>انهاء الاختبار الآن</button>
`; 
//quiz 9
const questions9 = [
    {
        id: 1,
        question: "ما هي أبرز المقومات الطبيعية للزراعة في الوطن العربي؟",
        options: [
            "المناخ، وسائل النقل، السوق",
            "الموارد المائية، التربة الخصبة، المناخ",
            "الأيدي العاملة، رأس المال، السوق",
            "رأس المال، وسائل النقل، الأيدي العاملة"
        ],
        answer: "الموارد المائية، التربة الخصبة، المناخ",
        desc: "الموارد المائية تشمل الأنهار، المياه الجوفية، والأمطار، وهي ضرورية للزراعة. التربة الخصبة والمناخ المتنوع يعززان تنوع المحاصيل."
    },
    {
        id: 2,
        question: "ما المصدر الرئيسي للمياه في الزراعة في المناطق الصحراوية في الوطن العربي؟",
        options: [
            "الأنهار",
            "مياه الأمطار",
            "المياه الجوفية",
            "بحيرات"
        ],
        answer: "المياه الجوفية",
        desc: "في المناطق الصحراوية، تعتمد الزراعة على المياه الجوفية المستخرجة عبر الآبار والعيون بسبب ندرة الأنهار والمطر."
    },
    {
        id: 3,
        question: "أي من الدول التالية تشتهر بزراعة البن؟",
        options: [
            "مصر",
            "العراق",
            "اليمن",
            "المغرب"
        ],
        answer: "اليمن",
        desc: "اليمن مشهورة بزراعة البن، خاصة في المناطق الجبلية، ويتميز البن اليمني بجودته العالية."
    },
    {
        id: 4,
        question: "ما هي المحاصيل التي تحتل مصر المركز الأول في إنتاجها؟",
        options: [
            "القمح، الأرز، الذرة",
            "التمر، الزيتون، العنب",
            "القطن، الكتان، القمح",
            "الفواكه، الزهور، الخضروات"
        ],
        answer: "القمح، الأرز، الذرة",
        desc: "مصر تعد من أكبر الدول المنتجة للقمح، الأرز، والذرة في الوطن العربي، مما يجعلها من الدول الرائدة في إنتاج الحبوب."
    },
    {
        id: 5,
        question: "في أي من الدول العربية يتم الاحتفال بيوم الزراعة العربي؟",
        options: [
            "السعودية",
            "الإمارات",
            "لبنان",
            "كل الدول العربية"
        ],
        answer: "كل الدول العربية",
        desc: "يتم الاحتفال بيوم الزراعة العربي في جميع الدول العربية في 2 سبتمبر من كل عام، تأكيدًا على أهمية الزراعة."
    },
    {
        id: 6,
        question: "ما هي المحاصيل السكرية التي تزرع في الوطن العربي؟",
        options: [
            "القمح، الأرز",
            "قصب السكر، بنجر السكر",
            "الموالح، الزيتون",
            "البطاطا، الفاصوليا"
        ],
        answer: "قصب السكر، بنجر السكر",
        desc: "قصب السكر وبنجر السكر من المحاصيل السكرية التي تُزرع بكثرة في مصر والسودان."
    },
    {
        id: 7,
        question: "ما هي التربة التي تعد من المقومات الأساسية للزراعة في الوطن العربي؟",
        options: [
            "التربة الجافة",
            "التربة المالحة",
            "التربة الخصبة",
            "التربة الرملية"
        ],
        answer: "التربة الخصبة",
        desc: "التربة الخصبة، الموجودة قرب الأنهار، تعد أساسية لزراعة المحاصيل المختلفة."
    },
    {
        id: 8,
        question: "ما هي المحاصيل التي تزرع في المناطق الحارة في الوطن العربي؟",
        options: [
            "الموز، الزيتون، التين",
            "الأرز، القمح",
            "البن، القطن",
            "البطاطا، الفاصوليا"
        ],
        answer: "الموز، الزيتون، التين",
        desc: "الموز، الزيتون، والتين تُزرع في المناطق الحارة التي تحتاج إلى درجات حرارة مرتفعة."
    },
    {
        id: 9,
        question: "أي من العوامل التالية يعتبر من المقومات البشرية للزراعة؟",
        options: [
            "رأس المال",
            "المياه الجوفية",
            "التربة الخصبة",
            "المناخ"
        ],
        answer: "رأس المال",
        desc: "رأس المال يساعد في تمويل المشاريع الزراعية وشراء المعدات اللازمة."
    },
    {
        id: 10,
        question: "ما هو نوع الري الذي يستخدم في مصر والسعودية لتوفير المياه العذبة؟",
        options: [
            "الري بالغمر",
            "الري بالتنقيط",
            "الري بالرش",
            "الري بالأنابيب"
        ],
        answer: "الري بالرش",
        desc: "الري بالرش يوفر المياه عن طريق توزيعها بشكل متساوٍ على الأراضي الزراعية."
    },
    {
        id: 11,
        question: "ما هي التحديات التي تواجه الزراعة في الوطن العربي؟",
        options: [
            "وفرة المياه العذبة",
            "التصحر وزحف الرمال",
            "تزايد الأمطار",
            "التربة الخصبة"
        ],
        answer: "التصحر وزحف الرمال",
        desc: "التصحر وزحف الرمال يعدان من أكبر التحديات التي تواجه الزراعة في الوطن العربي، خاصة في المناطق الصحراوية."
    },
    {
        id: 12,
        question: "أي من الدول العربية اختارتها الفاو كموقع للتراث الزراعي العالمي؟",
        options: [
            "مصر والسعودية",
            "الإمارات ومصر",
            "لبنان والأردن",
            "سوريا ولبنان"
        ],
        answer: "الإمارات ومصر",
        desc: "منظمة الفاو اختارت واحة العين في الإمارات وواحة سيوة في مصر كمواقع للتراث الزراعي العالمي، تقديراً لتاريخها الزراعي العريق."
    },
    {
        id: 13,
        question: "ما هي الزراعة التي لا تحتاج إلى تربة وتوفر الماء بنسبة 22%؟",
        options: [
            "الزراعة العضوية",
            "الزراعة المائية",
            "الزراعة التقليدية",
            "الزراعة الهيدروبونيكية"
        ],
        answer: "الزراعة المائية",
        desc: "الزراعة المائية لا تحتاج إلى تربة وتستخدم المياه بشكل أكثر كفاءة، مما يوفر حوالي 22% من المياه مقارنة بالزراعة التقليدية."
    },
    {
        id: 14,
        question: "ما هو سبب تذبذب كمية الأمطار في الوطن العربي؟",
        options: [
            "تقلبات المناخ",
            "ندرة المياه",
            "زيادة في درجات الحرارة",
            "كثافة السكان"
        ],
        answer: "تقلبات المناخ",
        desc: "تذبذب كمية الأمطار في الوطن العربي يعود إلى التغيرات المناخية، التي تؤدي إلى قلة أو زيادة في هطول الأمطار في بعض السنوات."
    },
    {
        id: 15,
        question: "ما هي إحدى طرق معالجة مشكلات الزراعة في الوطن العربي؟",
        options: [
            "تقليل استخدام الأسمدة العضوية",
            "زيادة عدد المحاصيل الزراعية",
            "إنشاء السدود والخزانات",
            "تقليص مساحات الأراضي المزروعة"
        ],
        answer: "إنشاء السدود والخزانات",
        desc: "إنشاء السدود والخزانات يساعد في تخزين المياه وتنظيم استخدامها، مما يساهم في حل مشكلة ندرة المياه في العديد من المناطق العربية."
    }
];

let selectedAnswers9 = [];
let score9 = 0;
let isSubmitted9 = false;

const answer9 = () => {
    score9 = 0;

    questions9.forEach((question, Qindex) => {
        const selectedOption = document.querySelector(
            `input[name="question-${Qindex}"]:checked`
        );

        if (selectedOption) {
            selectedAnswers9[Qindex] = selectedOption.value;
        } else {
            selectedAnswers9[Qindex] = null; 
        }
    });

    selectedAnswers9.forEach((selectedAnswer, index) => {
        if (selectedAnswer === questions9[index].answer) {
            score9++;
        }
    });

    console.log(score9);
};
document.getElementById("container9").innerHTML += `
    <iframe width="928" height="522" src="https://www.youtube.com/embed/XwS3OScaLX8" title="L9" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`;
questions9.forEach((question, index) => {
    document.getElementById("container9").innerHTML += `
      <h3>${question.question}</h3>
      <div id="options-container9-${index}"></div>
    `;

    question.options.forEach((option, i) => {
        document.getElementById(`options-container9-${index}`).innerHTML += `
            <label>
                <input type="radio" id='${question.answer}' name="question-${index}" value="${option}" onclick='answer9()'/>
                ${option}
            </label><br/>
        `;
    });
});

window.onload = () => {
    renderQuiz9();
};

function renderQuiz9() {
    const isSubmitted9 = localStorage.getItem('checkSubmitted9');
    const savedContent = localStorage.getItem('content9');

    if (isSubmitted9 === 'true' && savedContent) {
        document.getElementById("container9").innerHTML = savedContent;
    }
}

document.getElementById("container9").onsubmit = (e) => {
    e.preventDefault();

    if (selectedAnswers9.includes(null) || selectedAnswers9.length === 0) {
        return;
    }

    const content9 = `
    <iframe width="928" height="522" src="https://www.youtube.com/embed/XwS3OScaLX8" title="L9" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>درجتك هي ${score9}/${questions9.length}</h3>
      <h3>${Math.round((score9 / questions9.length) * 100)}%</h3>

      ${selectedAnswers9.map((selectedAnswer, i) => {
        const question = questions9[i];
        return `
          <p><b>${question.question}</b></p>
          <p>إجابتك: ${selectedAnswer || 'لم يتم الإجابة على هذا السؤال'}</p>
          <p>${selectedAnswer === question.answer.trim() ? 'إجابة صحيحة ✅' : 'إجابتك خاطئة ❌'}</p>
          <p>${question.desc}</p>
          <br><br>
        `;
      }).join('')}
    `;

    localStorage.setItem('checkSubmitted9', 'true');
    localStorage.setItem('content9', content9);
    document.getElementById("container9").innerHTML = content9;
};

document.querySelector('#container9').innerHTML += `
<button type='submit' class='submit-btn'>انهاء الاختبار الآن</button>
`;
//quiz 10
const questions10 = [
    {
        "id": 1,
        "question": "ما هي الدولة التي تعد الأولى في تربية الجاموس في الوطن العربي؟",
        "options": [
            "المغرب",
            "مصر",
            "السودان",
            "الصومال"
        ],
        "answer": "مصر",
        "desc": "مصر هي الأولى في تربية الجاموس في الوطن العربي بنسبة تصل إلى 22% بسبب البيئة الزراعية الفيضية المناسبة لذلك."
    },
    {
        "id": 2,
        "question": "أي من الدول التالية تعد الأولى في تربية الإبل في الوطن العربي؟",
        "options": [
            "السودان",
            "مصر",
            "الصومال",
            "المغرب"
        ],
        "answer": "الصومال",
        "desc": "الصومال تعتبر الدولة الأولى في تربية الإبل في الوطن العربي."
    },
    {
        "id": 3,
        "question": "أين توجد المصايد السمكية في الوطن العربي؟",
        "options": [
            "البحار فقط",
            "البحيرات فقط",
            "الأنهار فقط",
            "جميع ما سبق"
        ],
        "answer": "جميع ما سبق",
        "desc": "المصايد السمكية في الوطن العربي توجد في البحار، البحيرات، الأنهار، وكذلك في المحيطات."
    },
    {
        "id": 4,
        "question": "أي من الدول العربية تعد الأولى في إنتاج الأسماك من المصايد؟",
        "options": [
            "مصر",
            "المغرب",
            "الإمارات",
            "تونس"
        ],
        "answer": "المغرب",
        "desc": "المغرب هي الأولى في إنتاج الأسماك من المصايد بفضل طول سواحلها على البحر المتوسط والمحيط الأطلسي."
    },
    {
        "id": 5,
        "question": "من أكبر الدول العربية في إنتاج الأسماك من المزارع السمكية؟",
        "options": [
            "مصر",
            "السودان",
            "الصومال",
            "الجزائر"
        ],
        "answer": "مصر",
        "desc": "مصر تعد الأولى في إنتاج الأسماك من المزارع السمكية في الوطن العربي."
    },
    {
        "id": 6,
        "question": "ما هي المشكلة الرئيسية التي تواجه الثروة الحيوانية في الوطن العربي؟",
        "options": [
            "نقص المراعي",
            "وفرة الأعلاف",
            "زيادة إنتاج اللحوم",
            "انخفاض أعداد الحيوانات"
        ],
        "answer": "نقص المراعي",
        "desc": "نقص المراعي بسبب الجفاف والتصحر يعتبر من أكبر المشكلات التي تؤثر على الثروة الحيوانية في الوطن العربي."
    },
    {
        "id": 7,
        "question": "ما هو السبب الرئيسي لتربية الدواجن في الوطن العربي؟",
        "options": [
            "إنتاج البيض فقط",
            "سد العجز في اللحوم الحمراء",
            "تربية الحيوانات الأليفة",
            "تلبية احتياجات اللحوم البحرية"
        ],
        "answer": "سد العجز في اللحوم الحمراء",
        "desc": "الدول العربية تعتمد على تربية الدواجن لسد العجز في اللحوم الحمراء بسبب قلة إنتاج اللحوم الحمراء."
    },
    {
        "id": 8,
        "question": "ما هو المشروع المصري الذي يهدف إلى تنمية الثروة الحيوانية؟",
        "options": [
            "مشروع البحر الأحمر",
            "مشروع المليون رأس ماشية",
            "مشروع النيل",
            "مشروع القاهرة الكبرى"
        ],
        "answer": "مشروع المليون رأس ماشية",
        "desc": "مشروع المليون رأس ماشية هو مشروع مصري لتنمية الثروة الحيوانية، ويهدف إلى تحسين إنتاج اللحوم."
    },
    {
        "id": 9,
        "question": "أي من الدول التالية هي الأولى في إنتاج الأسماك من المزارع السمكية؟",
        "options": [
            "مصر",
            "المغرب",
            "العراق",
            "السعودية"
        ],
        "answer": "مصر",
        "desc": "مصر تحتل المركز الأول في إنتاج الأسماك من المزارع السمكية في الوطن العربي."
    },
    {
        "id": 10,
        "question": "ما هو العامل الذي يؤثر بشكل سلبي على الثروة السمكية في الوطن العربي؟",
        "options": [
            "ارتفاع درجات الحرارة في المسطحات المائية",
            "زيادة إنتاج الأسماك",
            "تطور تقنيات الصيد",
            "تنوع الموارد السمكية"
        ],
        "answer": "ارتفاع درجات الحرارة في المسطحات المائية",
        "desc": "ارتفاع درجات الحرارة يؤدي إلى نقص الأوكسجين في المسطحات المائية، مما يؤثر سلبًا على الكائنات البحرية."
    }
]
let selectedAnswers10 = [];
let score10 = 0;
let isSubmitted10 = false;

const answer10 = () => {
    score10 = 0;

    questions10.forEach((question, Qindex) => {
        const selectedOption = document.querySelector(
            `input[name="question-${Qindex}"]:checked`
        );

        if (selectedOption) {
            selectedAnswers10[Qindex] = selectedOption.value;
        } else {
            selectedAnswers10[Qindex] = null; 
        }
    });

    selectedAnswers10.forEach((selectedAnswer, index) => {
        if (selectedAnswer === questions10[index].answer) {
            score10++;
        }
    });

    console.log(score10);
};
document.getElementById("container10").innerHTML += `
<iframe width="927" height="522" src="https://www.youtube.com/embed/uZf8syN4FmQ" title="L10" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`;
questions10.forEach((question, index) => {
    document.getElementById("container10").innerHTML += `
      <h3>${question.question}</h3>
      <div id="options-container10-${index}"></div>
    `;

    question.options.forEach((option, i) => {
        document.getElementById(`options-container10-${index}`).innerHTML += `
            <label>
                <input type="radio" id='${question.answer}' name="question-${index}" value="${option}" onclick='answer10()'/>
                ${option}
            </label><br/>
        `;
    });
});

window.onload = () => {
    renderQuiz10();
};

function renderQuiz10() {
    const isSubmitted10 = localStorage.getItem('checkSubmitted10');
    const savedContent = localStorage.getItem('content10');

    if (isSubmitted10 === 'true' && savedContent) {
        document.getElementById("container10").innerHTML = savedContent;
    }
}

document.getElementById("container10").onsubmit = (e) => {
    e.preventDefault();

    if (selectedAnswers10.includes(null) || selectedAnswers10.length === 0) {
        return;
    }

    const content10 = `
    <iframe width="927" height="522" src="https://www.youtube.com/embed/uZf8syN4FmQ" title="L10" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>درجتك هي ${score10}/${questions10.length}</h3>
      <h3>${Math.round((score10 / questions10.length) * 100)}%</h3>

      ${selectedAnswers10.map((selectedAnswer, i) => {
        const question = questions10[i];
        return `
          <p><b>${question.question}</b></p>
          <p>إجابتك: ${selectedAnswer || 'لم يتم الإجابة على هذا السؤال'}</p>
          <p>${selectedAnswer === question.answer.trim() ? 'إجابة صحيحة ✅' : 'إجابتك خاطئة ❌'}</p>
          <p>${question.desc}</p>
          <br><br>
        `;
      }).join('')}
    `;

    localStorage.setItem('checkSubmitted10', 'true');
    localStorage.setItem('content10', content10);
    document.getElementById("container10").innerHTML = content10;
};

document.querySelector('#container10').innerHTML += `
<button type='submit' class='submit-btn'>انهاء الاختبار الآن</button>
`;
//quiz 11
const questions11 =[
    {
        "id": 1,
        "question": "أول الدول العربية إنتاجًا لمعدن الذهب هي:",
        "options": [
            "مصر",
            "السودان",
            "المغرب",
            "السعودية"
        ],
        "answer": "السودان",
        "desc": "السودان تحتل المرتبة الأولى عربيًا في إنتاج الذهب."
    },
    {
        "id": 2,
        "question": "يُستخدم الفوسفات بشكل رئيسي في:",
        "options": [
            "صناعة الإسمنت",
            "صناعة الأسمدة والمبيدات",
            "صناعة الحديد والصلب",
            "صناعة المشغولات الذهبية"
        ],
        "answer": "صناعة الأسمدة والمبيدات",
        "desc": "الفوسفات مادة أساسية في صناعة الأسمدة الزراعية والمبيدات."
    },
    {
        "id": 3,
        "question": "أول الدول العربية إنتاجًا للأسمنت هي:",
        "options": [
            "المغرب",
            "السعودية",
            "مصر",
            "الإمارات"
        ],
        "answer": "السعودية",
        "desc": "السعودية تحتل المركز الأول عربيًا في إنتاج الأسمنت."
    },
    {
        "id": 4,
        "question": "أهم المعادن المستخدمة في صناعة الكباري والمنشآت هي:",
        "options": [
            "الذهب",
            "الحديد",
            "الفوسفات",
            "النحاس"
        ],
        "answer": "الحديد",
        "desc": "الحديد يُستخدم في الصناعات الثقيلة مثل الكباري والمنشآت."
    },
    {
        "id": 5,
        "question": "يُسهم الوطن العربي بنسبة كم من الإنتاج العالمي للفوسفات؟",
        "options": [
            "10%",
            "25%",
            "50%",
            "75%"
        ],
        "answer": "25%",
        "desc": "الإنتاج العربي من الفوسفات يمثل ربع الإنتاج العالمي."
    },
    {
        "id": 6,
        "question": "تحتل المغرب المركز الأول عربيًا في إنتاج:",
        "options": [
            "الذهب",
            "الفوسفات",
            "الحديد",
            "البترول"
        ],
        "answer": "الفوسفات",
        "desc": "المغرب غنية بمناجم الفوسفات وتحتل المركز الأول عربيًا."
    },
    {
        "id": 7,
        "question": "أكثر الدول إنتاجًا للبترول في الوطن العربي هي:",
        "options": [
            "قطر",
            "العراق",
            "السعودية",
            "الإمارات"
        ],
        "answer": "السعودية",
        "desc": "السعودية تُعد أكبر منتج للبترول في الوطن العربي."
    },
    {
        "id": 8,
        "question": "أهم مقومات الصناعة في الوطن العربي هي:",
        "options": [
            "العمالة الماهرة",
            "رأس المال",
            "السوق المحلية",
            "جميع ما سبق"
        ],
        "answer": "جميع ما سبق",
        "desc": "الصناعة تعتمد على العمالة، رأس المال، والسوق المحلية."
    },
    {
        "id": 9,
        "question": "يُمثل قطاع الصناعة نسبة كم من القوى العاملة في الوطن العربي؟",
        "options": [
            "20%",
            "30%",
            "40%",
            "50%"
        ],
        "answer": "40%",
        "desc": "40% من القوى العاملة تعمل في القطاع الصناعي."
    },
    {
        "id": 10,
        "question": "من مشاكل التعدين في الوطن العربي:",
        "options": [
            "نقص الموارد المعدنية",
            "الاعتماد على استيراد المعدات",
            "وفرة مصادر الطاقة",
            "عدم وجود أسواق"
        ],
        "answer": "الاعتماد على استيراد المعدات",
        "desc": "الدول العربية تعتمد على استيراد الآلات من الخارج."
    },
    {
        "id": 11,
        "question": "الدولة الأولى عربيًا في إنتاج الغاز الطبيعي هي:",
        "options": [
            "السعودية",
            "قطر",
            "مصر",
            "الجزائر"
        ],
        "answer": "قطر",
        "desc": "قطر تعتبر المنتج الأول للغاز الطبيعي في الوطن العربي."
    },
    {
        "id": 12,
        "question": "من أمثلة الصناعات التحويلية:",
        "options": [
            "استخراج الفوسفات",
            "تكرير البترول",
            "استخراج الحديد",
            "استخراج الذهب"
        ],
        "answer": "تكرير البترول",
        "desc": "الصناعات التحويلية تشمل تحويل المواد الخام مثل تكرير البترول."
    },
    {
        "id": 13,
        "question": "تعمل الدول العربية على تطوير الصناعة من خلال:",
        "options": [
            "الاعتماد على مصادر الطاقة النظيفة",
            "تقليل الاستثمار في الصناعة",
            "إلغاء التكنولوجيا الحديثة",
            "خفض إنتاج الفوسفات"
        ],
        "answer": "الاعتماد على مصادر الطاقة النظيفة",
        "desc": "الصناعة الخضراء والطاقة النظيفة من أولويات التنمية الصناعية."
    },
    {
        "id": 14,
        "question": "أهم مصادر الطاقة النظيفة التي يتم تطويرها في الوطن العربي هي:",
        "options": [
            "البترول",
            "الطاقة الشمسية",
            "الغاز الطبيعي",
            "الفحم"
        ],
        "answer": "الطاقة الشمسية",
        "desc": "الوطن العربي يتميز بتوافر ضوء الشمس مما يشجع الاستثمار في الطاقة الشمسية."
    },
    {
        "id": 15,
        "question": "من نتائج نفاذ البترول في المستقبل:",
        "options": [
            "زيادة الاعتماد على الصناعة",
            "البحث عن مصادر طاقة بديلة",
            "تقليل الصناعات التحويلية",
            "زيادة صادرات الغاز الطبيعي"
        ],
        "answer": "البحث عن مصادر طاقة بديلة",
        "desc": "البترول مصدر غير متجدد، ونفاده يدفع الدول للبحث عن بدائل نظيفة."
    }
]
let selectedAnswers11 = [];
let score11 = 0;
let isSubmitted11 = false;

const answer11 = () => {
    score11 = 0;

    questions11.forEach((question, Qindex) => {
        const selectedOption = document.querySelector(
            `input[name="question-${Qindex}"]:checked`
        );

        if (selectedOption) {
            selectedAnswers11[Qindex] = selectedOption.value;
        } else {
            selectedAnswers11[Qindex] = null; 
        }
    });

    selectedAnswers11.forEach((selectedAnswer, index) => {
        if (selectedAnswer === questions11[index].answer) {
            score11++;
        }
    });

    console.log(score11);
};
document.getElementById("container11").innerHTML += `
<iframe width="928" height="522" src="https://www.youtube.com/embed/5TN7rN9j-5k" title="L11" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`;

questions11.forEach((question, index) => {
    document.getElementById("container11").innerHTML += `
      <h3>${question.question}</h3>
      <div id="options-container11-${index}"></div>
    `;

    question.options.forEach((option, i) => {
        document.getElementById(`options-container11-${index}`).innerHTML += `
            <label>
                <input type="radio" id='${question.answer}' name="question-${index}" value="${option}" onclick='answer11()'/>
                ${option}
            </label><br/>
        `;
    });
});

window.onload = () => {
    renderQuiz11();
};

function renderQuiz11() {
    const isSubmitted11 = localStorage.getItem('checkSubmitted11');
    const savedContent = localStorage.getItem('content11');

    if (isSubmitted11 === 'true' && savedContent) {
        document.getElementById("container11").innerHTML = savedContent;
    }
}

document.getElementById("container11").onsubmit = (e) => {
    e.preventDefault();

    if (selectedAnswers11.includes(null) || selectedAnswers11.length === 0) {
        return;
    }

    const content11 = `
    <iframe width="928" height="522" src="https://www.youtube.com/embed/5TN7rN9j-5k" title="L11" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>درجتك هي ${score11}/${questions11.length}</h3>
      <h3>${Math.round((score11 / questions11.length) * 100)}%</h3>

      ${selectedAnswers11.map((selectedAnswer, i) => {
        const question = questions11[i];
        return `
          <p><b>${question.question}</b></p>
          <p>إجابتك: ${selectedAnswer || 'لم يتم الإجابة على هذا السؤال'}</p>
          <p>${selectedAnswer === question.answer.trim() ? 'إجابة صحيحة ✅' : 'إجابتك خاطئة ❌'}</p>
          <p>${question.desc}</p>
          <br><br>
        `;
      }).join('')}
    `;

    localStorage.setItem('checkSubmitted11', 'true');
    localStorage.setItem('content11', content11);
    document.getElementById("container11").innerHTML = content11;
};

document.querySelector('#container11').innerHTML += `
<button type='submit' class='submit-btn'>انهاء الاختبار الآن</button>
`;
//quiz 12
const questions12 =[
    {
        "id": 1,
        "question": "ما هو الموقع الجغرافي الذي يعزز السياحة في الوطن العربي؟",
        "options": [
            "الوجود في مناطق شديدة البرودة",
            "الموقع بالقرب من المناطق الاستوائية",
            "الموقع الاستراتيجي على طرق التجارة العالمية",
            "الموقع في المناطق الجبلية"
        ],
        "answer": "الموقع الاستراتيجي على طرق التجارة العالمية",
        "desc": "الموقع الجغرافي الفريد والوضع الاستراتيجي على طرق التجارة العالمية يساهم في جذب السياح."
    },
    {
        "id": 2,
        "question": "أي من هذه الدول لا تُعد من أبرز مقاصد السياحة الثقافية في الوطن العربي؟",
        "options": [
            "مصر",
            "العراق",
            "السعودية",
            "تونس"
        ],
        "answer": "السعودية",
        "desc": "السعودية أكثر شهرة بالسياحة الدينية، بينما مصر والعراق وتونس مشهورة بالسياحة الثقافية."
    },
    {
        "id": 3,
        "question": "أي من الأنواع التالية من السياحة يشمل زيارة الشواطئ في لبنان؟",
        "options": [
            "سياحة علاجية",
            "سياحة ثقافية",
            "سياحة ترفيهية",
            "سياحة رياضية"
        ],
        "answer": "سياحة ترفيهية",
        "desc": "زيارة الشواطئ في لبنان تُعد جزءًا من السياحة الترفيهية."
    },
    {
        "id": 4,
        "question": "أي من هذه العوامل يُعد من مقومات السياحة الطبيعية في الوطن العربي؟",
        "options": [
            "تنوع الفنادق والقرى السياحية",
            "الموقع الجغرافي الفريد",
            "وجود شبكة مواصلات جيدة",
            "تطوير الفنادق"
        ],
        "answer": "الموقع الجغرافي الفريد",
        "desc": "الموقع الجغرافي الفريد يُعتبر من المقومات الطبيعية التي تساعد في جذب السياح."
    },
    {
        "id": 5,
        "question": "زيارة الأماكن المقدسة مثل المسجد الحرام والمسجد الأقصى تعتبر سياحة...",
        "options": [
            "علاجية",
            "رياضية",
            "دينية",
            "ثقافية"
        ],
        "answer": "دينية",
        "desc": "السياحة الدينية تتضمن زيارة الأماكن المقدسة مثل المسجد الحرام والمسجد الأقصى."
    },
    {
        "id": 6,
        "question": "ما هي نوع السياحة التي تشمل زيارة مواقع التراث العالمي مثل الأهرامات في مصر؟",
        "options": [
            "سياحة ثقافية",
            "سياحة رياضية",
            "سياحة ترفيهية",
            "سياحة بيئية"
        ],
        "answer": "سياحة ثقافية",
        "desc": "السياحة الثقافية تركز على زيارة المعالم التاريخية مثل الأهرامات."
    },
    {
        "id": 7,
        "question": "تتمثل السياحة البيئية في زيارة:",
        "options": [
            "الأماكن المقدسة",
            "المحميات الطبيعية",
            "الشواطئ",
            "المعارض التجارية"
        ],
        "answer": "المحميات الطبيعية",
        "desc": "السياحة البيئية تشمل زيارة المحميات الطبيعية والمناطق الصحراوية."
    },
    {
        "id": 8,
        "question": "أي من الدول العربية تُعد من أبرز مقاصد السياحة العلاجية؟",
        "options": [
            "الإمارات",
            "الأردن",
            "المغرب",
            "العراق"
        ],
        "answer": "الأردن",
        "desc": "الأردن تعد وجهة رئيسية للسياحة العلاجية بسبب مناطق مثل البحر الميت وعيون ماعين."
    },
    {
        "id": 9,
        "question": "السياحة التي تشمل الذهاب إلى المعارض الدولية مثل معرض القاهرة الدولي للكتاب تُعد سياحة:",
        "options": [
            "دينية",
            "ثقافية",
            "رياضية",
            "ترفيهية"
        ],
        "answer": "ثقافية",
        "desc": "المعارض الثقافية مثل معرض القاهرة الدولي للكتاب تساهم في تعزيز السياحة الثقافية."
    },
    {
        "id": 10,
        "question": "أي من هذه الأنواع من السياحة يشمل زيارة شواطئ البحر الأحمر؟",
        "options": [
            "سياحة رياضية",
            "سياحة بيئية",
            "سياحة ترفيهية",
            "سياحة علاجية"
        ],
        "answer": "سياحة ترفيهية",
        "desc": "زيارة شواطئ البحر الأحمر تُعد من الأنشطة الترفيهية."
    },
    {
        "id": 11,
        "question": "أين توجد جزيرة فرسان التي تعتبر من مواقع السياحة الطبيعية؟",
        "options": [
            "في تونس",
            "في السعودية",
            "في مصر",
            "في المغرب"
        ],
        "answer": "في السعودية",
        "desc": "جزيرة فرسان تقع في البحر الأحمر، وهي من المناطق الطبيعية المميزة في السعودية."
    },
    {
        "id": 12,
        "question": "ما الذي يعزز السياحة الرياضية في الوطن العربي؟",
        "options": [
            "استضافة المسابقات الرياضية العالمية",
            "وجود محميات طبيعية",
            "تطور الفنادق والقرى السياحية",
            "توفير مراكز تجارية ضخمة"
        ],
        "answer": "استضافة المسابقات الرياضية العالمية",
        "desc": "استضافة البطولات الكبرى مثل كأس العالم أو كأس الأمم الإفريقية تساهم في تعزيز السياحة الرياضية."
    },
    {
        "id": 13,
        "question": "ما هو الهدف الأساسي للسياحة المستدامة؟",
        "options": [
            "زيادة أعداد السياح",
            "تقليل النفايات والانبعاثات",
            "تعزيز السياحة الثقافية",
            "إنشاء مراكز تجارية جديدة"
        ],
        "answer": "تقليل النفايات والانبعاثات",
        "desc": "السياحة المستدامة تهدف إلى الحفاظ على البيئة من خلال تقليل النفايات والانبعاثات واستخدام مصادر الطاقة المتجددة."
    },
    {
        "id": 14,
        "question": "أحد مقومات السياحة في الوطن العربي يشمل تطور:",
        "options": [
            "الفنادق فقط",
            "الفنادق والمطاعم فقط",
            "الفنادق والقرى السياحية",
            "الطرق والجسور فقط"
        ],
        "answer": "الفنادق والقرى السياحية",
        "desc": "تطوير الفنادق والقرى السياحية يساعد على توفير خدمات مريحة للسياح."
    },
    {
        "id": 15,
        "question": "أي من الدول العربية تعد واحدة من أبرز الوجهات السياحية للشراء والتسوق؟",
        "options": [
            "تونس",
            "لبنان",
            "الإمارات",
            "اليمن"
        ],
        "answer": "الإمارات",
        "desc": "الإمارات، وخاصة دبي، تعد من أبرز الوجهات السياحية للتسوق بفضل مراكز التسوق الفاخرة."
    }
]
let selectedAnswers12 = [];
let score12 = 0;
let isSubmitted12 = false;

const answer12 = () => {
    score12 = 0;

    questions12.forEach((question, Qindex) => {
        const selectedOption = document.querySelector(
            `input[name="question-${Qindex}"]:checked`
        );

        if (selectedOption) {
            selectedAnswers12[Qindex] = selectedOption.value;
        } else {
            selectedAnswers12[Qindex] = null; 
        }
    });

    selectedAnswers12.forEach((selectedAnswer, index) => {
        if (selectedAnswer === questions12[index].answer) {
            score12++;
        }
    });

    console.log(score12);
};
document.getElementById("container12").innerHTML += `
<iframe width="928" height="522" src="https://www.youtube.com/embed/2OqIoSC_unE" title="L12" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`
questions12.forEach((question, index) => {
    document.getElementById("container12").innerHTML += `
      <h3>${question.question}</h3>
      <div id="options-container12-${index}"></div>
    `;

    question.options.forEach((option, i) => {
        document.getElementById(`options-container12-${index}`).innerHTML += `
            <label>
                <input type="radio" id='${question.answer}' name="question-${index}" value="${option}" onclick='answer12()'/>
                ${option}
            </label><br/>
        `;
    });
});

window.onload = () => {
    renderQuiz12();
};

function renderQuiz12() {
    const isSubmitted12 = localStorage.getItem('checkSubmitted12');
    const savedContent = localStorage.getItem('content12');

    if (isSubmitted12 === 'true' && savedContent) {
        document.getElementById("container12").innerHTML = savedContent;
    }
}

document.getElementById("container12").onsubmit = (e) => {
    e.preventDefault();

    if (selectedAnswers12.includes(null) || selectedAnswers12.length === 0) {
        return;
    }

    const content12 = `
    <iframe width="928" height="522" src="https://www.youtube.com/embed/2OqIoSC_unE" title="L12" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>درجتك هي ${score12}/${questions12.length}</h3>
      <h3>${Math.round((score12 / questions12.length) * 100)}%</h3>

      ${selectedAnswers12.map((selectedAnswer, i) => {
        const question = questions12[i];
        return `
          <p><b>${question.question}</b></p>
          <p>إجابتك: ${selectedAnswer || 'لم يتم الإجابة على هذا السؤال'}</p>
          <p>${selectedAnswer === question.answer.trim() ? 'إجابة صحيحة ✅' : 'إجابتك خاطئة ❌'}</p>
          <p>${question.desc}</p>
          <br><br>
        `;
      }).join('')}
    `;

    localStorage.setItem('checkSubmitted12', 'true');
    localStorage.setItem('content12', content12);
    document.getElementById("container12").innerHTML = content12;
};

document.querySelector('#container12').innerHTML += `
<button type='submit' class='submit-btn'>انهاء الاختبار الآن</button>
`;
//quiz 13
const questions13 =[
    {
        "id": 1,
        "question": "كيف ساهمت التجارة في بناء الدولة الإسلامية؟",
        "options": [
            "زيادة الضرائب",
            "نشر الإسلام وتقوية العلاقات بين الدول",
            "إضعاف العلاقات الاقتصادية",
            "تقليل التبادل التجاري"
        ],
        "answer": "نشر الإسلام وتقوية العلاقات بين الدول",
        "desc": "التجارة كانت وسيلة لنشر الإسلام وتعزيز العلاقات الاقتصادية والثقافية بين مختلف الشعوب."
    },
    {
        "id": 2,
        "question": "أي من المدن التالية كانت مركزًا تجاريًا في الدولة الإسلامية؟",
        "options": [
            "القاهرة",
            "جدة",
            "بغداد",
            "دمشق"
        ],
        "answer": "جدة",
        "desc": "جدة كانت أحد المراكز التجارية المهمة في العصور الإسلامية لوقوعها على البحر الأحمر، ما جعلها نقطة وصل بين العالم العربي والدول الأخرى."
    },
    {
        "id": 3,
        "question": "ما هي إحدى الفوائد الأساسية للتجارة في الوطن العربي؟",
        "options": [
            "زيادة التبعية للدول الأجنبية",
            "تقوية العلاقات بين الدول",
            "تقليل فرص العمل",
            "تدمير الاقتصاد المحلي"
        ],
        "answer": "تقوية العلاقات بين الدول",
        "desc": "التجارة تعزز من الروابط الاقتصادية والسياسية بين الدول، مما يساعد على تحقيق التنمية المشتركة."
    },
    {
        "id": 4,
        "question": "ما الذي يساعد التجارة في ضبط الميزان التجاري للدولة؟",
        "options": [
            "تقليل الواردات",
            "زيادة الصادرات",
            "تقليل الضرائب",
            "تقليل الإنتاج المحلي"
        ],
        "answer": "زيادة الصادرات",
        "desc": "زيادة الصادرات يعزز من دخل الدولة ويضبط الميزان التجاري، مما يساهم في استقرار الاقتصاد."
    },
    {
        "id": 5,
        "question": "ما هي أحد أهداف التجارة البينية العربية؟",
        "options": [
            "تعزيز التجارة بين الدول العربية فقط",
            "تحسين العلاقات التجارية مع الدول الأجنبية",
            "تعزيز التبادل التجاري بين الدول العربية",
            "زيادة الصادرات العربية فقط"
        ],
        "answer": "تعزيز التبادل التجاري بين الدول العربية",
        "desc": "التجارة البينية تهدف إلى تعزيز التجارة بين الدول العربية من خلال تقليل الحواجز الجمركية وتحقيق التكامل الاقتصادي."
    },
    {
        "id": 6,
        "question": "ما هي أحد أسباب ضعف التجارة البينية بين الدول العربية؟",
        "options": [
            "زيادة التنوع في الصادرات",
            "توافر التكنولوجيا الحديثة",
            "وجود حواجز جمركية",
            "ارتفاع جودة المنتجات العربية"
        ],
        "answer": "وجود حواجز جمركية",
        "desc": "وجود حواجز جمركية بين الدول العربية يعوق تدفق البضائع ويضعف التجارة البينية."
    },
    {
        "id": 7,
        "question": "ما هو أحد أنواع التجارة التي تشمل الصادرات والواردات بين الدول العربية وبقية العالم؟",
        "options": [
            "التجارة البينية العربية",
            "التجارة الدولية",
            "التجارة المحلية",
            "التجارة الداخلية"
        ],
        "answer": "التجارة الدولية",
        "desc": "التجارة الدولية تتضمن التبادل التجاري بين الدول العربية وبقية دول العالم، مثل الصادرات والواردات."
    },
    {
        "id": 8,
        "question": "ما هو أبرز مصدر للصادرات في الوطن العربي؟",
        "options": [
            "المنتجات الزراعية",
            "المنتجات الصناعية",
            "الوقود والمعادن",
            "الإلكترونيات"
        ],
        "answer": "الوقود والمعادن",
        "desc": "الوقود والمعادن مثل النفط والغاز الطبيعي هي من أهم صادرات الدول العربية."
    },
    {
        "id": 9,
        "question": "ما هي أهم واردات الوطن العربي؟",
        "options": [
            "المنتجات الزراعية",
            "السلع الغذائية",
            "المعدات الثقيلة",
            "المنتجات الصناعية"
        ],
        "answer": "المنتجات الصناعية",
        "desc": "الدول العربية تستورد العديد من السلع الصناعية لتلبية احتياجاتها في مختلف القطاعات الاقتصادية."
    },
    {
        "id": 10,
        "question": "ما هي إحدى الطرق التي يمكن أن تساعد في تقوية التجارة البينية بين الدول العربية؟",
        "options": [
            "فرض قيود صارمة على الصادرات",
            "تقليل الجمارك بين الدول العربية",
            "زيادة التكاليف الجمركية",
            "تقليل المعارض التجارية"
        ],
        "answer": "تقليل الجمارك بين الدول العربية",
        "desc": "تقليل الجمارك يعزز من تدفق التجارة بين الدول العربية ويزيد من التبادل التجاري."
    },
    {
        "id": 11,
        "question": "ما هي إحدى المنظمات العربية التي تهدف إلى تعزيز التجارة الحرة بين الدول العربية؟",
        "options": [
            "اتحاد دول المغرب العربي",
            "المنظمة العربية للتنمية الزراعية",
            "منظمة التجارة العربية الحرة",
            "مجلس التعاون الخليجي"
        ],
        "answer": "منظمة التجارة العربية الحرة",
        "desc": "منظمة التجارة العربية الحرة تسعى إلى تحقيق التكامل الاقتصادي بين الدول العربية عن طريق إزالة الحواجز التجارية."
    },
    {
        "id": 12,
        "question": "كيف تسهم التجارة الإلكترونية في دعم الاقتصاد؟",
        "options": [
            "تقليل قدرة الشركات على الوصول للأسواق",
            "رفع الأسعار بسبب التنافس",
            "تقليل الفجوة الاقتصادية",
            "تسهيل عملية الشراء والبيع على نطاق أوسع"
        ],
        "answer": "تسهيل عملية الشراء والبيع على نطاق أوسع",
        "desc": "التجارة الإلكترونية تتيح للأفراد والشركات الوصول إلى أسواق واسعة وتساعد في زيادة الحركة التجارية."
    },
    {
        "id": 13,
        "question": "ما هو أحد أهداف إنشاء الاتحاد العربي للتجارة الإلكترونية؟",
        "options": [
            "تقليل التجارة الدولية",
            "تشجيع التجارة الإلكترونية في الدول العربية",
            "حظر التجارة الإلكترونية",
            "تقليص استخدام الإنترنت"
        ],
        "answer": "تشجيع التجارة الإلكترونية في الدول العربية",
        "desc": "الاتحاد العربي للتجارة الإلكترونية يسعى إلى تعزيز استخدام التجارة الإلكترونية في الدول العربية لزيادة التبادل التجاري والاقتصادي."
    }
]
let selectedAnswers13 = [];
let score13 = 0;
let isSubmitted13 = false;

const answer13 = () => {
    score13 = 0;

    questions13.forEach((question, Qindex) => {
        const selectedOption = document.querySelector(
            `input[name="question-${Qindex}"]:checked`
        );

        if (selectedOption) {
            selectedAnswers13[Qindex] = selectedOption.value;
        } else {
            selectedAnswers13[Qindex] = null; 
        }
    });

    selectedAnswers13.forEach((selectedAnswer, index) => {
        if (selectedAnswer === questions13[index].answer) {
            score13++;
        }
    });

    console.log(score13);
};
document.getElementById("container13").innerHTML += `
<iframe width="928" height="522" src="https://www.youtube.com/embed/r4_ldUofj34" title="L13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`;
questions13.forEach((question, index) => {
    document.getElementById("container13").innerHTML += `
      <h3>${question.question}</h3>
      <div id="options-container13-${index}"></div>
    `;

    question.options.forEach((option, i) => {
        document.getElementById(`options-container13-${index}`).innerHTML += `
            <label>
                <input type="radio" id='${question.answer}' name="question-${index}" value="${option}" onclick='answer13()'/>
                ${option}
            </label><br/>
        `;
    });
});

window.onload = () => {
    renderQuiz13();
};

function renderQuiz13() {
    const isSubmitted13 = localStorage.getItem('checkSubmitted13');
    const savedContent = localStorage.getItem('content13');

    if (isSubmitted13 === 'true' && savedContent) {
        document.getElementById("container13").innerHTML = savedContent;
    }
}

document.getElementById("container13").onsubmit = (e) => {
    e.preventDefault();

    if (selectedAnswers13.includes(null) || selectedAnswers13.length === 0) {
        return;
    }

    const content13 = `
    <iframe width="928" height="522" src="https://www.youtube.com/embed/r4_ldUofj34" title="L13" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>درجتك هي ${score13}/${questions13.length}</h3>
      <h3>${Math.round((score13 / questions13.length) * 100)}%</h3>

      ${selectedAnswers13.map((selectedAnswer, i) => {
        const question = questions13[i];
        return `
          <p><b>${question.question}</b></p>
          <p>إجابتك: ${selectedAnswer || 'لم يتم الإجابة على هذا السؤال'}</p>
          <p>${selectedAnswer === question.answer.trim() ? 'إجابة صحيحة ✅' : 'إجابتك خاطئة ❌'}</p>
          <p>${question.desc}</p>
          <br><br>
        `;
      }).join('')}
    `;

    localStorage.setItem('checkSubmitted13', 'true');
    localStorage.setItem('content13', content13);
    document.getElementById("container13").innerHTML = content13;
};

document.querySelector('#container13').innerHTML += `
<button type='submit' class='submit-btn'>انهاء الاختبار الآن</button>
`;
