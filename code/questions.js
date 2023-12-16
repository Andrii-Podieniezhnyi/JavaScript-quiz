export let questions = [
    {
    numb: 1,
    question: "<span class='round_bracket'>(</span><span class='square_bracket'>[]</span> <span class='plus'>+</span> <span class='curly_bracket'>{}</span><span class='round_bracket'>)</span>",
    answer: "[object Object]",
    options: [
      "[object Object]",
      "undefined",
      "File Upload",
      "TypeError"
    ]
  },
    {
    numb: 2,
    question: "<span class='round_bracket'>(</span><span class='text_of_log'>typeof</span> <span class='numbers'>1</span> <span class='plus'>+</span> <span class='numbers'>2</span><span class='round_bracket'>)</span>",
    answer: "number2",
    options: [
      "number2",
      "string2",
      "number",
      "3"
    ]
  },
    {
    numb: 3,
    question: "<span class='round_bracket'>(</span><span class='numbers'>2</span> <span class='multiplication'>**</span> <span class='numbers'>3</span> <span class='multiplication'>**</span> <span class='numbers'>2</span>)",
    answer: "512",
    options: [
      "NaN",
      "215",
      "512",
      "12"
    ]
  },
    {
    numb: 4,
    question: "<span class='round_bracket'>(</span><span class='plus'>+</span><span class='string'>'10'</span> <span class='minus'>-</span> <span class='string'>'5'</span><span class='round_bracket'>)</span>",
    answer: "5",
    options: [
      "15",
      "50",
      "Nan",
      "5"
    ]
  },
    {
    numb: 5,
    question: "<span class='round_bracket'>(</span><span class='numbers'>1</span> <span class='equality_operator'>===</span> <span class='text_of_log'>true</span><span class='round_bracket'>)</span>",
    answer: "false",
    options: [
      "true",
      "false",
      "SyntaxError",
      "NaN"
    ]
  },

    {
    numb: 6,
    question: "<span class='round_bracket'>(</span><span class='text_of_log'>typeof typeof null</span><span class='round_bracket'>)</span>",
    answer: "string",
    options: [
      "string",
      "object",
      "undefined",
      "null"
    ]
  },

  {
    numb: 7,
    question: "<span class='round_bracket'>(</span><span class='square_bracket'>[</span><span class='blue__square_bracket'>[</span><span class='yellow__square_bracket'>[</span><span class='numbers'>0</span><span class='yellow__square_bracket'>]</span><span class='blue__square_bracket'>]</span><span class='square_bracket'>]</span> <span class='plus'>+</span> <span class='numbers'>1</span><span class='round_bracket'>)</span>",
    answer: "01",
    options: [
      "NaN",
      "1",
      "[object Object]1",
      "01"
    ]
  },

  {
    numb: 8,
    question: "<span class='round_bracket'>(</span><span class='double_negation'>!!</span><span class='string'>'false'</span> <span class='.equality_operator'>==</span> <span class='double_negation'>!!</span><span class='string'>'true'</span><span class='round_bracket'>)</span>",
    answer: "true",
    options: [
      "true",
      "false",
      "undefined",
      "NaN"
    ]
  },

  {
    numb: 9,
    question: "<span class='round_bracket'>(</span><span class='text_of_log'>typeof</span> <span class='double_negation'>!!</span><span class='text_of_log'>null</span><span class='round_bracket'>)</span>",
    answer: "boolean",
    options: [
      "Number",
      "null",
      "undefined",
      "boolean"
    ]
  },

  {
    numb: 10,
    question: "<span class='round_bracket'>(</span><span class='text_of_log'>typeof</span> <span class='pink__round_bracket'>(</span><span class='text_of_log'>typeof</span> <span class='numbers'>1</span><span class='pink__round_bracket'>)</span><span class='round_bracket'>)</span>",
    answer: "string",
    options: [
      "number",
      "string",
      "object",
      "boolean"
    ]
  },

  {
    numb: 11,
    question: "<span class='round_bracket'>(</span><span class='numbers'>2</span> <span class='plus'>+</span> <span class='string'>'2'</span> <span class='multiplication'>*</span> <span class='numbers'>3</span> <span class='minus'>-</span> <span class='string'>'4'</span><span class='round_bracket'>)</span>",
    answer: "4",
    options: [
      "62",
      "18",
      "2",
      "4"
    ]
  },

  {
    numb: 12,
    question: "<span class='round_bracket'>(</span><span class='pink__round_bracket'>(</span><span class='blue__round_bracket'>()</span> <span class='arrow'>=></span> <span class='numbers'>10</span><span class='pink__round_bracket'>)</span><span class='pink__round_bracket'><span class='pink__round_bracket'>()</span><span class='round_bracket'>)</span>",
    answer: "10",
    options: [
      "ReferenceError",
      "10",
      "undefined",
      "TypeError"
    ]
  },

  {
    numb: 13,
    question: "<span class='round_bracket'>(</span><span class='nan'>NaN</span> <span class='equality_operator'>===</span> <span class='nan'>NaN</span><span class='round_bracket'>)</span>",
    answer: "false",
    options: [
      "false",
      "true",
      "ReferenceError",
      "SyntaxError"
    ]
  },

  {
    numb: 14,
    question: "<span class='round_bracket'>(</span><span class='numbers'>1</span> <span class='multiplication'>*</span> <span class='text_of_log'>undefined</span><span class='round_bracket'>)</span>",
    answer: "NaN",
    options: [
      "undefined",
      "0",
      "NaN",
      "Error"
    ]
  },

  {
    numb: 15,
    question: "<span class='round_bracket'>(</span><span class='numbers'>10</span><span class='dot'>..</span><span class='to_string'>toString</span><span class='pink__round_bracket'>()</span><span class='round_bracket'>)</span>",
    answer: "10",
    options: [
      "10",
      "String(10)",
      "'10'",
      "NaN"
    ]
  },

  {
    numb: 16,
    question: "<span class='round_bracket'>(</span><span class='numbers'>3</span> <span class='comparison_signs'><</span> <span class='numbers'>2</span> <span class='comparison_signs'><</span> <span class='numbers'>1</span><span class='round_bracket'>)</span>",
    answer: "true",
    options: [
      "Error",
      "undefined",
      "false",
      "true"
    ]
  },

  {
    numb: 17,
    question: "<span class='round_bracket'>(</span><span class='square_bracket'>[</span><span class='numbers'>1</span><span class='comma'>,</span> <span class='numbers'>2</span><span class='comma'>,</span> <span class='numbers'>3</span><span class='comma'>,</span> <span class='numbers'>4</span><span class='square_bracket'>]</span><span class='dot'>.</span><span class='map'>map</span><span class='pink__round_bracket'>(</span><span class='parse_int'>parseInt</><span class='pink__round_bracket'>)</span><span class='round_bracket'>)</span>",
    answer: "[1, NaN, NaN, NaN]",
    options: [
      "[1, 0, 1, 0]",
      "[1, NaN, NaN, NaN]",
      "[1, 2, 3, 4]",
      "[1, 1, 1, 1]"
    ]
  },

  {
    numb: 18,
    question: "<span class='round_bracket'>(</span><span class='math'>Math</span><span class='dot'>.</span><span class='max'>max</span><span class='pink__round_bracket'>()</span><span class='round_bracket'>)</span>;",
    answer: "-Infinity",
    options: [
      "TypeError",
      "undefined",
      "-Infinity",
      "Infinity"
    ]
  },

  {
    numb: 19,
    question: "<span class='round_bracket'>(</span><span class='text_of_log'>typeof null</span> <span class='equality_operator'>===</span> <span class='text_of_log'>typeof undefined</span><span class='round_bracket'>)</span>;",
    answer: "false",
    options: [
      "true",
      "false",
      "undefined",
      "null"
    ]
  },

  {
    numb: 20,
    question: "<span class='round_bracket'>(</span><span class='numbers'>1</span> <span class='.plus'>+</span> <span class='numbers'>2</span> <span class='.plus'>+</span> <span class='string'>'3'</span><span class='.minus'>-</span> <span class='numbers'>4</span> <span class='.plus'>+</span> <span class='numbers'>5</span> <span class='.plus'>+</span> <span class='string'>'6'</span> <span class='.plus'>+</span> <span class='numbers'>7</span> <span class='.minus'>-</span> <span class='string'>'8'</span> <span class='.plus'>+</span> <span class='numbers'>9</span> <span class='.plus'>-</span> <span class='numbers'>10</span><span class='round_bracket'>)</span>",
    answer: "3458",
    options: [
      "12345678910",
      "47",
      "17",
      "3458"
    ]
  },

  {
    numb: 21,
    question: "<span class='round_bracket'>(</span><span class='text_of_log'>null instanceof</span> <span class='object'>Object</span><span class='round_bracket'>)</span>",
    answer: "false",
    options: [
      "false",
      "true",
      "undefined",
      "null"
    ]
  },

  {
    numb: 22,
    question: "<span class='round_bracket'>(</span><span class='double_negation'>!!</span><span class='square_bracket'>[</span><span class='plus'>+</span><span class='blue__square_bracket'>[]</span><span class='square_bracket'>]</span><span class='round_bracket'>)</span>",
    answer: "true",
    options: [
      "null",
      "undefined",
      "true",
      "false"
    ]
  },

  {
    numb: 23,
    question: "<span class='round_bracket'>(</span><span class='text_of_log'>new</span> <span class='array'>Array</span><span class='pink__round_bracket'>(</span><span class='numbers'>5</span><span class='pink__round_bracket'>)</span><span class='dot'>.</span><span class='to_string'>toString</span><span class='pink__round_bracket'>()</span><span class='round_bracket'>)</span>",
    answer: "',,,,'",
    options: [
      "0,0,0,0,0",
      "5,,,,,",
      "undefined,undefined,undefined,undefined,undefined",
      "',,,,'"
    ]
  },

  {
    numb: 24,
    question: "<span class='round_bracket'>(</span><span class='numbers'>1</span> <span class='comparison_signs'><</span> <span class='numbers'>2</span> <span class='comparison_signs'><</span> <span class='numbers'>3</span><span class='round_bracket'>)</span>",
    answer: "true",
    options: [
      "true",
      "false",
      "NaN",
      "1"
    ]
  },

  {
    numb: 25,
    question: "<span class='round_bracket'>(</span><span class='square_bracket'>[</span><span class='comma'>,,</span><span class='square_bracket'>]</span><span class='dot'>.</span><span class='length'>length</span><span class='round_bracket'>)</span>",
    answer: "2",
    options: [
      "2",
      "1",
      "0",
      "undefined"
    ]
  },

  {
    numb: 26,
    question: "<span class='round_bracket'>(</span><span class='array'>Array</span><span class='dot'>.</span><span class='from'>from</span><span class='pink__round_bracket'>(</span><span class='text_of_log'>new</span> <span class='set'>Set</span><span class='blue__round_bracket'>(</span><span class='yellow__square_bracket'>[</span><span class='numbers'>1</span><span class='comma'>,</span> <span class='numbers'>2</span><span class='comma'>,</span> <span class='numbers'>2</span><span class='comma'>,</span> <span class='numbers'>3</span><span class='comma'>,</span> <span class='numbers'>4</span><span class='comma'>,</span> <span class='numbers'>4</span><span class='yellow__square_bracket'>]</span><span class='blue__round_bracket'>)</span><span class='pink__round_bracket'>)</span><span class='round_bracket'>)</span>",
    answer: "[1, 2, 3, 4]",
    options: [
      "undefined",
      "[1, 2, 3, 4, Set {2, 4}]",
      "[1, 2, 3, 4, 4]",
      "[1, 2, 3, 4]"
    ]
  },

  {
    numb: 27,
    question: "<span class='round_bracket'>(</span><span class='string'>'hello'</span> <span class='text_of_log'>instanceof</span> <span class='object'>Object</span><span class='round_bracket'>)</span>",
    answer: "false",
    options: [
      "null",
      "TypeError",
      "false",
      "true"
    ]
  },

  {
    numb: 28,
    question: "<span class='round_bracket'>(</span><span class='object'>Object</span><span class='dot'>.</span><span class='text_of_log'>prototype</span><span class='dot'>.</span><span class='to_string'>toString</span><span class='dot'>.</span><span class='call'>call</span><span class='pink__round_bracket'>(</span><span class='null'>null</span><span class='pink__round_bracket'>)</span><span class='round_bracket'>)</span>",
    answer: "[object Null]",
    options: [
      "TypeError",
      "[object Object]",
      "[object Undefined]",
      "[object Null]"
    ]
  },

  {
    numb: 29,
    question: "<span class='round_bracket'>(</span><span class='array'>Array</span><span class='pink__round_bracket'>(</span><span class='numbers'>3</span><span class='pink__round_bracket'>)</span><span class='dot'>.</span><span class='fill'>fill</span><span class='pink__round_bracket'>(</span><span class='numbers'>2</span><span class='pink__round_bracket'>)</span></span><span class='round_bracket'>)</span>",
    answer: "[2, 2, 2]",
    options: [
      "TypeError",
      "3",
      "[[2, 2, 2]]",
      "[2, 2, 2]"
    ]
  },

  {
    numb: 30,
    question: "<span class='round_bracket'>(</span><span class='square_bracket'>[</span><span class='numbers'>1</span><span class='comma'>,</span> <span class='numbers'>2</span><span class='comma'>,</span> <span class='numbers'>3</span><span class='comma'>,</span> <span class='numbers'>4</span><span class='square_bracket'>]</span><span class='dot'>.</span><span class='reduce_right'>reduceRight</span><span class='pink__round_bracket'>(</span><span class='blue__round_bracket'>(</span><span class='x_y'>x</span><span class='comma'>,</span> <span class='x_y'>y</span><span class='blue__round_bracket'>)</span> <span class='arrow'>=></span> <span class='x_y'>x</span> <span class='minus'>-</span> <span class='x_y'>y</span><span class='pink__round_bracket'>)</span><span class='round_bracket'>)</span>",
    answer: "-2",
    options: [
      "10",
      "-2",
      "0",
      "NaN"
    ]
  },

  {
    numb: 31,
    question: "<span class='round_bracket'>(</span><span class='text_of_log'>typeof</span><span class='pink__round_bracket'>(</span><span class='symbol'>Symbol</span><span class='blue__round_bracket'>()</span><span class='pink__round_bracket'>)</span><span class='round_bracket'>)</span>",
    answer: "symbol",
    options: [
      "symbol",
      "undefined",
      "object",
      "number"
    ]
  },

  {
    numb: 32,
    question: "<span class='round_bracket'>(</span><span class='string'>'5'</span><span class='plus'>+</span> <span class='numbers'>3</span><span class='round_bracket'>)</span>",
    answer: "53",
    options: [
      "35",
      "undefined",
      "8",
      "53"
    ]
  },

  {
    numb: 33,
    question: "<span class='round_bracket'>(</span><span class='string'>'hello'</span><span class='dot'>.</span><span class='slice'>slice</span><span class='pink__round_bracket'>(</span><span class='numbers'>0</span><span class='comma'>,</span> <span class='minus'>-</span><span class='numbers'>1</span><span class='pink__round_bracket'>)</span><span class='round_bracket'>)</span>",
    answer: "hell",
    options: [
      "hello",
      "o",
      "hell",
      "TypeError"
    ]
  },

  {
    numb: 34,
    question: "<span class='round_bracket'>(</span><span class='text_of_log'>typeof</span> <span class='function'>Function</span><span class='round_bracket'>)</span>",
    answer: "function",
    options: [
      "function",
      "object",
      "undefined",
      "TypeError"
    ]
  },

  {
    numb: 35,
    question: "<span class='round_bracket'>(</span><span class='undefined'>undefined</span> <span class='equality_operator'>==</span> <span class='null'>null</span><span class='round_bracket'>)</span>",
    answer: "true",
    options: [
      "TypeError",
      "undefined",
      "true",
      "false"
    ]
  },

  {
    numb: 36,
    question: "<span class='round_bracket'>(</span><span class='numbers'>3</span> <span class='comparison_signs'>></span> <span class='numbers'>2</span> <span class='comparison_signs'>></span> <span class='numbers'>1</span><span class='round_bracket'>)</span>",
    answer: "false",
    options: [
      "true",
      "false",
      "TypeError",
      "Error"
    ]
  },

  {
    numb: 37,
    question: "<span class='round_bracket'>(</span><span class='square_bracket'>[]</span> <span class='instanceof'>instanceof</span> <span class='array'>Array</span><span class='round_bracket'>)</span>",
    answer: "true",
    options: [
      "Array",
      "Error",
      "false",
      "true"
    ]
  },

  {
    numb: 38,
    question: "<span class='round_bracket'>(</span><span class='math'>Math</span><span class='dot'>.</span><span class='min'>min</span><span class='pink__round_bracket'>()</span> <span class='comparison_signs'><</span> <span class='math'>Math</span><span class='dot'>.</span><span class='max'>max</span><span class='pink__round_bracket'>()</span><span class='round_bracket'>)</span>",
    answer: "false",
    options: [
      "true",
      "false",
      "undefined",
      "NaN"
    ]
  },

  {
    numb: 39,
    question: "<span class='round_bracket'>(</span><span class='typeof'>typeof</span></span> <span class='new'>new</span> <span class='array'>Array</span><span class='pink__round_bracket'>()</span><span class='round_bracket'>)</span>",
    answer: "object",
    options: [
      "array",
      "object",
      "undefined",
      "TypeError"
    ]
  },

  {
    numb: 40,
    question: "<span class='round_bracket'>(</span><span class='string'>'5'</span><span class='minus'>-</span> <span class='numbers'>3</span><span class='round_bracket'>)</span>",
    answer: "2",
    options: [
      "2",
      "53",
      "-53",
      "NaN"
    ]
  },

  {
    numb: 41,
    question: "<span class='round_bracket'>(</span><span class='string'>'banana'</span><span class='dot'>.</span><span class='split'>split</span><span class='pink__round_bracket'>(</span><span class='string'>''</span><span class='pink__round_bracket'>)</span><span class='dot'>.</span><span class='reverse'>reverse</span><span class='pink__round_bracket'>()</span><span class='dot'>.</span><span class='join'>join</span><span class='pink__round_bracket'>(</span><span class='string'>''</span><span class='pink__round_bracket'>)</span><span class='round_bracket'>)</span>",
    answer: "ananab",
    options: [
      "TypeError",
      "b",
      "banana",
      "ananab"
    ]
  },

  {
    numb: 42,
    question: "<span class='round_bracket'>(</span><span class='typeof'>typeof</span> <span class='nan'>NaN</span> <span class='equality_operator'>===</span> <span class='string'>'number'</span><span class='round_bracket'>)</span>",
    answer: "true",
    options: [
      "Error",
      "NaN",
      "true",
      "false"
    ]
  },

  {
    numb: 43,
    question: "<span class='round_bracket'>(</span><span class='string'>'hello'</span><span class='dot'>.</span><span class='substring'>substring</span><span class='pink__round_bracket'>(</span><span class='numbers'>0</span><span class='comma'>,</span> <span class=''minus>-</span><span class='numbers'>1</span><span class='pink__round_bracket'>)</span><span class='round_bracket'>)</span>",
    answer: "''",
    options: [
      "undefined",
      "hello",
      "''",
      "h"
    ]
  },

  {
    numb: 44,
    question: "<span class='round_bracket'>(</span><span class='undefined'>undefined</span> <span class='equality_operator'>===</span> <span class='null'>null</span><span class='round_bracket'>)</span>",
    answer: "false",
    options: [
      "false",
      "true",
      "null",
      "Error"
    ]
  },

  {
    numb: 45,
    question: "<span class='round_bracket'>(</span><span class='square_bracket'>[]</span> <span class='instanceof'>instanceof</span> <span class='object'>Object</span><span class='round_bracket'>)</span>",
    answer: "true",
    options: [
      "Error",
      "null",
      "false",
      "true"
    ]
  },

  {
    numb: 46,
    question: "<span class='round_bracket'>(</span><span class='double_negation'>!!</span><span class='string'>'false'</span> <span class='equality_operator'>===</span> <span class='double_negation'>!!</span><span class='string'>'true'</span><span class='round_bracket'>)</span>",
    answer: "true",
    options: [
      "Error",
      "null",
      "true",
      "false"
    ]
  },

  {
    numb: 47,
    question: "<span class='round_bracket'>(</span><span class='numbers'>1</span> <span class='equality_operator'>==</span> <span class='true'>true</span><span class='round_bracket'>)</span>",
    answer: "true",
    options: [
      "false",
      "true",
      "undefined",
      "null"
    ]
  },

  {
    numb: 48,
    question: "<span class='round_bracket'>(</span><span class='plus'>+</span><span class='string'>'10'</span> <span class='plus'>+ +</span><span class='string'>'5'</span><span class='round_bracket'>)</span>",
    answer: "15",
    options: [
      "15",
      "20",
      "50",
      "105"
    ]
  },

  {
    numb: 49,
    question: "<span class='round_bracket'>(</span><span class='square_bracket'>[]</span> <span class='equality_operator'>==</span> <span class='negation'>!</span><span class='square_bracket'>[]</span><span class='round_bracket'>)</span>",
    answer: "true",
    options: [
      "null",
      "undefined",
      "true",
      "false"
    ]
  },

  {
    numb: 50,
    question: "<span class='round_bracket'>(</span><span class='typeof'>typeof typeof</span> <span class='numbers'>1</span><span class='round_bracket'>)</span>",
    answer: "string",
    options: [
      "boolean",
      "string",
      "undefined",
      "object"
    ]
  },

  {
    numb: 51,
    question: "<span class='round_bracket'>(</span><span class='typeof'>typeof</span> <span class='new'>new</span> <span class='object'>Object</span><span class='pink__round_bracket'>()</span><span class='round_bracket'>)</span>",
    answer: "object",
    options: [
      "object",
      "Function",
      "Array",
      "undefined"
    ]
  },

  {
    numb: 52,
    question: "<span class='round_bracket'>(</span><span class='string'>'hello'</span> <span class='instanceof'>instanceof</span> <span class='caps_string'>String</span><span class='round_bracket'>)</span>",
    answer: "false",
    options: [
      "TypeError",
      "Error",
      "true",
      "false"
    ]
  },

  {
    numb: 53,
    question: "<span class='round_bracket'>(</span><span class='numbers'>1_000_000_000_000_000</span><span class='round_bracket'>)</span>",
    answer: "1000000000000000",
    options: [
      "NaN",
      "1000000000000000",
      "1e15",
      "-727379968"
    ]
  },

  {
    numb: 54,
    question: "<span class='round_bracket'>(</span><span class='minus'>-</span><span class='string'>'10'</span> <span class='minus'>-</span> <span class='minus'>-</span><span class='string'>'5'</span><span class='round_bracket'>)</span>",
    answer: "-5",
    options: [
      "105",
      "5",
      "-5",
      "0"
    ]
  },

  {
    numb: 55,
    question: "<span class='round_bracket'>(</span><span class='curly_bracket'>{}</span> <span class='equality_operator'>==</span> <span class='negation'>!</span><span class='curly_bracket'>{}</span><span class='round_bracket'>)</span>",
    answer: "false",
    options: [
      "object",
      "TypeError",
      "true",
      "false"
    ]
  },

  {
    numb: 56,
    question: "<span class='round_bracket'>(</span><span class='numbers'>1</span> <span class='plus'>+</span> <span class='numbers'>2</span> <span class='multiplication'>*</span> <span class='numbers'>3</span> <span class='minus'>-</span> <span class='string'>'4'</span><span class='round_bracket'>)</span>",
    answer: "3",
    options: [
      "3",
      "6",
      "-5",
      "NaN"
    ]
  },

  {
    numb: 57,
    question: "<span class='round_bracket'>(</span><span class='square_bracket'>[</span><span class='numbers'>1</span><span class='comma'>,</span> <span class='numbers'>2</span></span><span class='comma'>,</span> <span class='numbers'>3</span><span class='square_bracket'>]</span> <span class='plus'>+</span> <span class='square_bracket'>[</span><span class='numbers'>4</span><span class='comma'>,</span> <span class='numbers'>5</span><span class='comma'>,</span> <span class='numbers'>6</span><span class='square_bracket'>]</span><span class='round_bracket'>)</span>",
    answer: "1,2,34,5,6",
    options: [
      "NaN",
      "15",
      "1,2,34,5,6",
      "undefined"
    ]
  },

  {
    numb: 58,
    question: "<span class='round_bracket'>(</span><span class='text_of_log'>typeof NaN</span><span class='round_bracket'>)</span>",
    answer: "number",
    options: [
      "object",
      "undefined",
      "NaN",
      "number"
    ]
  },

  {
    numb: 59,
    question: "<span class='round_bracket'>(<span><span class='double_negation'>!!</span><span class='square_bracket'>[]</span><span class='round_bracket'>)</span>",
    answer: "true",
    options: [
      "object",
      "TypeError",
      "true",
      "false"
    ]
  },

  {
    numb: 60,
    question: "<span class='round_bracket'>(</span><span class='text_of_log'>typeof undefined</span><span class='round_bracket'>)</span>",
    answer: "undefined",
    options: [
      "boolean",
      "null",
      "object",
      "undefined"
    ]
  },

  {
    numb: 61,
    question: "<span class='round_bracket'>(</span><span class='numbers'>1_000_000_000_000_000</span><span class='text_of_log'>n</span> <span class='plus'>+</span> <span class='numbers'>1</span><span class='text_of_log'>n</span><span class='round_bracket'>)</span>",
    answer: "1000000000000001n",
    options: [
      "1000000000000001",
      "1000000000000001n",
      "1000000000000001.00",
      "undefined"
    ]
  },

  {
    numb: 62,
    question: "<span class='round_bracket'>(</span><span class='double_negation'>!!</span><span class='curly_bracket'>{}</span><span class='round_bracket'>)</span>",
    answer: "true",
    options: [
      "true",
      "false",
      "boolean",
      "Error"
    ]
  },

  {
    numb: 63,
    question: "<span class='round_bracket'>(</span><span class='text_of_log'>typeof null</span><span class='round_bracket'>)</span>",
    answer: "object",
    options: [
      "Error",
      "TypeError",
      "object",
      "undefined"
    ]
  },

  {
    numb: 64,
    question: "<span class='round_bracket'>(</span><span class='double_negation'>!!</span><span class='curly_bracket'>{}</span> <span class='plus'>+</span> <span class='square_bracket'>[]</span><span class='round_bracket'>)</span>",
    answer: "true",
    options: [
      "Error",
      "undefined",
      "true",
      "false"
    ]
  },

  {
    numb: 65,
    question: "<span class='round_bracket'>(</span><span class='numbers'>1</span> <span class='division'>/</span> <span class='numbers'>0</span><span class='round_bracket'>)</span>",
    answer: "Infinity",
    options: [
      "0",
      "Infinity",
      "Error",
      "NaN"
    ]
  },

  {
    numb: 66,
    question: "<span class='round_bracket'>(</span><span class='typeof'>typeof</span> <span class='pink__round_bracket'>(</span><span class='text_of_log'>function(){}</span><span class='pink__round_bracket'>)</span><span class='round_bracket'>)</span>",
    answer: "function",
    options: [
      "object",
      "boolean",
      "number",
      "function"
    ]
  }, 

  {
    numb: 67,
    question: "<span class='round_bracket'>(</span><span class='null'>null</span> <span class='equality_operator'>==</span> <span class='undefined'>undefined</span><span class='round_bracket'>)</span>",
    answer: "true",
    options: [
      "TypeError",
      "Error",
      "true",
      "false"
    ]
  },

  {
    numb: 68,
    question: "<span class='round_bracket'>(</span><span class='numbers'>1</span> <span class'plus'>+</span> <span class='string'>'2'</span> <span class='minus'>-</span> <span class='string'>'1'</span><span class='round_bracket'>)</span>",
    answer: "11",
    options: [
      "1",
      "11",
      "2",
      "NaN"
    ]
  },

  {
    numb: 69,
    question: "<span class='round_bracket'>(</span><span class='square_bracket'>[</span><span class='numbers'>1</span><span class='comma'>,</span> <span class='numbers'>2</span><span class comma>,</span> <span class='numbers'>3</span><span class='square_bracket'>]</span> <span class='minus'>-</span> <span class='square_bracket'>[</span><span class='numbers'>1</span><span class='comma'>,</span> <span class='numbers'>2</span><span class='square_bracket'>]</span><span class='round_bracket'>)</span>",
    answer: "NaN",
    options: [
      "TypeError",
      "[3]",
      "NaN",
      "undefined"
    ]
  },

  {
    numb: 70,
    question: "<span class='round_bracket'>(</span><span class='plus'>+</span><span class='string'>''</span><span class='round_bracket'>)</span>",
    answer: "0",
    options: [
      "+",
      "''",
      "NaN",
      "0"
    ]
  },

  {
    numb: 71,
    question: "<span class='round_bracket'>(</span><span class='square_bracket'>[]</span> <span class='equality_operator'>==</span> <span class='square_bracket'>[]</span><span class='round_bracket'>)</span>",
    answer: "false",
    options: [
      "false",
      "true",
      "Error",
      "undefined"
    ]
  },

  {
    numb: 72,
    question: "<span class='round_bracket'>(</span><span class='text_of_log'>typeof Infinity</span><span class='round_bracket'>)</span>",
    answer: "number",
    options: [
      "number",
      "object",
      "TypeError",
      "undefined"
    ]
  },

  {
    numb: 73,
    question: "<span class='round_bracket'>(</span><span class='number'>0.1</span> <span class='plus'>+</span> <span class='number'>0.2</span><span class='round_bracket'>)</span>",
    answer: "0.30000000000000004",
    options: [
      "0.3",
      "0.30000000000000004",
      "0.30000000000000003",
      "0n"
    ]
  },

  {
    numb: 74,
    question: "<span class='round_bracket'>(</span><span class='square_bracket'>[]</span> <span class='plus'>+</span> <span class='double_negation'>!!</span><span class='curly_bracket'>{}</span><span class='round_bracket'>)</span>",
    answer: "true",
    options: [
      "object",
      "TypeError",
      "false",
      "true"
    ]
  },

  {
    numb: 75,
    question: "<span class='round_bracket'>(</span><span class='typeof'>typeof</span> <span class='curly_bracket'>(</span><span class='text_of_log'>() => {}</span><span class='curly_bracket'>)</span><span class='round_bracket'>)</span>",
    answer: "function",
    options: [
      "function",
      "object",
      "TypeError",
      "null"
    ]
  },

  {
    numb: 76,
    question: "<span class='round_bracket'>(</span><span class='null'>null</span> <span class='equality_operator'>===</span> <span class='undefined'>undefined</span><span class='round_bracket'>)</span>",
    answer: "false",
    options: [
      "false",
      "TypeError",
      "null",
      "true"
    ]
  },

  {
    numb: 77,
    question: "<span class='round_bracket'>(</span><span class='square_bracket'>[</span><span class='numbers'>1</span><span class='comma'>,</span> <span class='numbers'>2</span><span class='comma'>,</span> <span class='numbers'>3</span><span class='square_bracket'>]</span> <span class='plus'>+</span> <span class='square_bracket'>[</span><span class='numbers'>1</span><span class='comma'>,</span> <span class='numbers'>2</span><span class='square_bracket'>]</span><span class='round_bracket'>)</span>",
    answer: "1,2,31,2",
    options: [
      "9",
      "1,2,4,2",
      "1,2,31,2",
      "null"
    ]
  },

  {
    numb: 78,
    question: "<span class='round_bracket'>(</span><span class='double_negation'>!!</span><span class='string'>'0'</span><span class='round_bracket'>)</span>",
    answer: "true",
    options: [
      "true",
      "false",
      "NaN",
      "string"
    ]
  },

  {
    numb: 79,
    question: "<span class='round_bracket'>(</span><span class='curly_bracket'>{}</span> <span class='equality_operator'>==</span> <span class='curly_bracket'>{}</span><span class='round_bracket'>)</span>",
    answer: "false",
    options: [
      "null",
      "undefined",
      "true",
      "false"
    ]
  },

  {
    numb: 80,
    question: "<span class='round_bracket'>(</span><span class='null'>null</span><span class='dot'>.</span><span class='property'>property</span><span class='round_bracket'>)</span>",
    answer: "TypeError",
    options: [
      "0",
      "null",
      "TypeError",
      "undefined"
    ]
  },
];