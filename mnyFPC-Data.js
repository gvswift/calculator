const gas_diesel8703 = [
                {ccs: 0, rates:[25, 25]}, 
                {ccs: 1000, rates:[25, 25]}, 
                {ccs: 1500, rates:[25, 25]}, 
                {ccs: 1600, rates:[30, 30]}, 
                {ccs: 1801, rates:[30, 30]},
                {ccs: 2001, rates:[30, 30]}, 
                {ccs: 2501, rates:[30, 30]}, 
                {ccs: 3001, rates:[30, 30]},
              ];

const cargo_8704 = [
                          {ton: 0.0, rates:[10, 60]}, 
                          {ton: 3.6, rates:[10, 30]}, 
                          {ton: 5.1, rates:[10, 30]}, 
                          {ton: 21.0, rates:[10, 30]},
                        ];
 
const surcharge_base = 1000.00

const ageFactors8702_8704 =[
  {age: 0, factor: 1},
  {age: 3, factor: 2},
  {age: 5, factor: 3},
  {age: 7, factor: 4},
  {age: 11, factor: 5},
  ];

const seatingFactors8702 = [
  {seats: 10, factor: 0.75},
  {seats: 22, factor: 1.00},
  {seats: 30, factor: 1.25},
  ];

  const cifMatrix8702 = [{cif: 50001.00, factors:[0.00, 0.00, 0.60, 0.50, 3.00]},
                         {cif: 45001.00, factors:[0.00, 0.00, 0.90, 0.70, 3.50]},
                         {cif: 40001.00, factors:[0.00, 0.00, 1.20, 0.90, 4.00]},
                         {cif: 35001.00, factors:[7.40, 3.70, 1.35, 1.10, 5.00]},
                         {cif: 30001.00, factors:[9.35, 4.65, 2.50, 1.20, 5.50]},
                         {cif: 25001.00, factors:[13.35, 6.65, 3.10, 1.87, 5.75]},
                         {cif: 20001.00, factors:[17.35, 8.65, 4.00, 2.00, 6.00]},
                         {cif: 15001.00, factors:[21.35, 10.65, 5.00, 2.80, 6.50]},
                         {cif: 13001.00, factors:[24.35, 12.65, 6.00, 3.20, 6.75]},
                         {cif:     0.00, factors:[27.35, 14.65, 7.00, 4.20, 7.00]}];



const ageFactors8703 = [
  {age: 0, factor: 1},
  {age: 3, factor: 2},
  {age: 5, factor: 3},
  {age: 7, factor: 3.75},
  {age: 9, factor: 5.50},
    ];

const engineSizeFactors8703 = [
  {ccs: 0, factor: 0.50},
  {ccs: 1001, factor: 0.55},
  {ccs: 1501, factor: 0.70},
  {ccs: 1600, factor: 0.70},
  {ccs: 1801, factor: 0.75},
  {ccs: 2001, factor: 0.80},
  {ccs: 2501, factor: 0.80},
  {ccs: 3001, factor: 0.85},
];

const cifMatrix8703 = [ {cif: 40001.00 , factors:[0.00, 0.30, 0.20, 0.10, 2.75]},
                        {cif: 35001.00 , factors:[1.00, 0.40, 0.25, 0.15, 3.50]},
                        {cif: 30001.00 , factors:[2.00, 0.75, 0.40, 0.25, 5.00]},
                        {cif: 25001.00 , factors:[6.00, 2.00, 1.00, 0.50, 6.00]},
                        {cif: 20001.00 , factors:[7.00, 3.00, 2.00, 1.00, 7.00]},
                        {cif: 15001.00 , factors:[10.00, 5.00, 3.00, 2.00,8.00]},
                        {cif: 13001.00 , factors:[12.00, 7.00, 4.00, 3.00, 9.00]},
                        {cif:     0.00 , factors:[16.00, 9.00, 6.00, 5.00, 11.50]},
];

  const ageFactors8703Electric = [
    {age: 0, factor: 1},
    {age: 3, factor: 2},
    {age: 5, factor: 3},
    {age: 7, factor: 4},
    {age: 9, factor:5},
      ];
  
  const rangeFactors8703 =[
    {range: 96, factor: 0.50},
    {range: 81, factor: 0.55},
    {range: 66, factor: 0.70},
    {range: 51, factor: 0.75},
    {range: 36, factor: 0.80},
    {range: 0,  factor: 0.85},
       ];
  

const tonnageFactors8704 = [
  {tons: 0, factor: 1.00},
  {tons: 6, factor: 1.10},
  ];


const cifMatrix8704 = [{cif: 50001.00, factors:[0.00, 0.00, 0.60, 0.50, 2.00]}, 
                       {cif: 45001.00, factors:[0.00, 0.00, 0.90, 0.70, 2.50]},
                       {cif: 40001.00, factors:[5.60, 2.80, 1.85, 0.90, 3.00]},
                       {cif: 35001.00, factors:[8.00, 3.00, 2.35, 1.10, 3.50]},
                       {cif: 30001.00, factors:[11.00, 4.50, 3.00, 1.40, 4.00]},
                       {cif: 25001.00, factors:[14.00, 6.00, 4.00, 1.65, 4.50]},
                       {cif: 20001.00, factors:[17.00, 7.50, 5.00, 2.00, 5.00]},
                       {cif: 15001.00, factors:[20.00, 9.00, 6.00, 3.00, 5.50]},
                       {cif: 13001.00, factors:[23.00, 10.50, 7.00, 3.75, 6.00]},
                       {cif:     0.00, factors:[26.00, 12.00, 8.00, 4.00, 7.00]}];

  
  const ageFactors8705 = [
            {age: 0, factor: 1},
            {age: 3, factor: 2},
            {age: 5, factor: 3},
            {age: 7, factor: 4},
            {age: 9, factor: 5},
                ];

    const cifMatrix8705 = [{cif: 100001.00, factors:[4.90, 2.50, 1.70, 1.30, 1.05]},
                         {cif:  90001.00, factors:[4.90, 2.50, 1.70, 1.30, 1.05]},
                         {cif:  80001.00, factors:[4.90, 2.50, 1.70, 1.30, 1.05]},
                         {cif:  70001.00, factors:[4.90, 2.50, 1.70, 1.30, 1.05]},
                         {cif:  60001.00, factors:[4.90, 2.50, 1.70, 1.30, 1.05]},
                         {cif:  50001.00, factors:[4.90, 2.50, 1.70, 1.30, 1.05]},
                         {cif:  45001.00, factors:[4.90, 2.50, 1.70, 1.30, 1.05]},
                         {cif:  40001.00, factors:[4.90, 2.50, 1.70, 1.30, 1.05]},
                          {cif: 35001.00, factors:[4.90, 2.50, 1.70, 1.30, 1.05]},
                          {cif:     0.00, factors:[4.90, 2.50, 1.70, 1.30, 1.05]}];
