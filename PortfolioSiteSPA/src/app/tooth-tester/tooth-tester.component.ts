import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooth-tester',
  templateUrl: './tooth-tester.component.html',
  styleUrls: ['./tooth-tester.component.css']
})
export class ToothTesterComponent implements OnInit {



  data = [
            {'std': 1, 'iso': '1-8', 'name': 'Maxillary Right 3rd Molar' },
            {'std': 2, 'iso': '1-7', 'name': 'Maxillary Right 2nd Molar' },
            {'std': 3, 'iso': '1-6', 'name': 'Maxillary Right 1st Molar' },
            {'std': 4, 'iso': '1-5', 'name': 'Maxillary Right 2nd Premolar' },
            {'std': 5, 'iso': '1-4', 'name': 'Maxillary Right 1st Premolar' },
            {'std': 6, 'iso': '1-3', 'name': 'Maxillary Right Canine' },
            {'std': 7, 'iso': '1-2', 'name': 'Maxillary Right Lateral Incisor' },
            {'std': 8, 'iso': '1-1', 'name': 'Maxillary Right Central Incisor' },
            {'std': 9, 'iso': '2-1', 'name': 'Maxillary Left Central Incisor' },
            {'std': 10, 'iso': '2-2', 'name': 'Maxillary Left Lateral Incisor' },
            {'std': 11, 'iso': '2-3', 'name': 'Maxillary Left Canine' },
            {'std': 12, 'iso': '2-4', 'name': 'Maxillary Left 1st Premolar' },
            {'std': 13, 'iso': '2-5', 'name': 'Maxillary Left 2nd Premolar' },
            {'std': 14, 'iso': '2-6', 'name': 'Maxillary Left 1st Molar' },
            {'std': 15, 'iso': '2-7', 'name': 'Maxillary Left 2nd Molar' },
            {'std': 16, 'iso': '2-8', 'name': 'Maxillary Left 3rd Molar' },
            {'std': 17, 'iso': '3-8', 'name': 'Mandibular Left 3rd Molar' },
            {'std': 18, 'iso': '3-7', 'name': 'Mandibular Left 2nd Molar' },
            {'std': 19, 'iso': '3-6', 'name': 'Mandibular Left 1st Molar' },
            {'std': 20, 'iso': '3-5', 'name': 'Mandibular Left 2nd Premolar' },
            {'std': 21, 'iso': '3-4', 'name': 'Mandibular Left 1st Premolar' },
            {'std': 22, 'iso': '3-3', 'name': 'Mandibular Left Canine' },
            {'std': 23, 'iso': '3-2', 'name': 'Mandibular Left Lateral Incisor' },
            {'std': 24, 'iso': '3-1', 'name': 'Mandibular Left Central Incisor' },
            {'std': 25, 'iso': '4-1', 'name': 'Mandibular Right Central Incisor' },
            {'std': 26, 'iso': '4-2', 'name': 'Mandibular Right Lateral Incisor' },
            {'std': 27, 'iso': '4-3', 'name': 'Mandibular Right Canine' },
            {'std': 28, 'iso': '4-4', 'name': 'Mandibular Right 1st Premolar' },
            {'std': 29, 'iso': '4-5', 'name': 'Mandibular Right 2nd Premolar' },
            {'std': 30, 'iso': '4-6', 'name': 'Mandibular Right 1st Molar' },
            {'std': 31, 'iso': '4-7', 'name': 'Mandibular Right 2nd Molar' },
            {'std': 32, 'iso': '4-8', 'name': 'Mandibular Right 3rd Molar' }
        ];

  babies = [
            {'std': 'A', 'iso': '1-5', 'name': 'Maxillary Right 2nd Molar' },
            {'std': 'B', 'iso': '1-4', 'name': 'Maxillary Right 1st Molar' },
            {'std': 'C', 'iso': '1-3', 'name': 'Maxillary Right Canine' },
            {'std': 'D', 'iso': '1-2', 'name': 'Maxillary Right Lateral Incisor' },
            {'std': 'E', 'iso': '1-1', 'name': 'Maxillary Right Central Incisor' },
            {'std': 'F', 'iso': '2-1', 'name': 'Maxillary Left Central Incisor' },
            {'std': 'G', 'iso': '2-2', 'name': 'Maxillary Left Lateral Incisor' },
            {'std': 'H', 'iso': '2-3', 'name': 'Maxillary Left Canine' },
            {'std': 'I', 'iso': '2-4', 'name': 'Maxillary Left 1st Molar' },
            {'std': 'J', 'iso': '2-5', 'name': 'Maxillary Left 2nd Molar' },
            {'std': 'K', 'iso': '3-5', 'name': 'Mandibular Left 2nd Molar' },
            {'std': 'L', 'iso': '3-4', 'name': 'Mandibular Left 1st Molar' },
            {'std': 'M', 'iso': '3-3', 'name': 'Mandibular Left Canine' },
            {'std': 'N', 'iso': '3-2', 'name': 'Mandibular Left Lateral Incisor' },
            {'std': 'O', 'iso': '3-1', 'name': 'Mandibular Left Central Incisor' },
            {'std': 'P', 'iso': '4-1', 'name': 'Mandibular Right Central Incisor' },
            {'std': 'Q', 'iso': '4-2', 'name': 'Mandibular Right Lateral Incisor' },
            {'std': 'R', 'iso': '4-3', 'name': 'Mandibular Right Canine' },
            {'std': 'S', 'iso': '4-4', 'name': 'Mandibular Right 1st Molar' },
            {'std': 'T', 'iso': '4-5', 'name': 'Mandibular Right 2nd Molar' }
  ];


  top = [ 'Maxillary', 'Mandibular' ];
  side = [ 'Right', 'Left' ];
  tooth = [ 'Central Incisor', 'Lateral Incisor', 'Canine', '1st Premolar', '2nd Premolar', '1st Molar', '2nd Molar', '3rd Molar' ];
  babytooth = [ 'Central Incisor', 'Lateral Incisor', 'Canine', '1st Molar', '2nd Molar' ];
  RIGHT_ANSWER = 'That\'s Right Cutie Patootie!';
  WRONG_ANSWER = 'Nope, Try Again.';

  selectedMode: any;

  selectedToothNumber: any;
  selectedToothName: any;
  outputToothNumber: any;
  toothNumberInput: any;
  outputToothName: any;

  selectedPrimaryToothNumber: any;
  selectedPrimaryToothName: any;
  outputPrimaryToothNumber: any;
  primaryToothNumberInput: any;
  outputPrimaryToothName: any;

  selectedTop: any;
  selectedSide: any;
  selectedTooth: any;

  selectedPrimaryTop: any;
  selectedPrimarySide: any;
  selectedPrimaryTooth: any;
  constructor() { }

  ngOnInit() {
    this.selectedMode = 'std';
    this.changeMode();
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  changeMode() {
    // console.log('mode changed');
    this.resetToothNumberTest();
    this.resetToothNameTest();
    this.resetPrimaryToothNumberTest();
    this.resetPrimaryToothNameTest();
  }

  resetToothNumberTest() {
    // console.log('number reset');
    const r = this.getRandomInt(1, this.data.length);
    const text = this.data[r][this.selectedMode];
    this.selectedToothNumber = text;
    this.outputToothNumber = '';
    this.selectedTop = '';
    this.selectedSide = '';
    this.selectedTooth = '';
  }
  checkToothNumberTest() {
    // console.log('number checked');
    // console.log( this.selectedTop + ' ' + this.selectedSide + ' ' + this.selectedTooth);
    const items = this.data.filter(item => item[this.selectedMode] === this.selectedToothNumber);
    if (items.length === 1) {
      const t = items[0]['name'].toLowerCase() ==
      (this.selectedTop + ' ' + this.selectedSide + ' ' + this.selectedTooth).toLowerCase();
      this.outputToothNumber = t ? this.RIGHT_ANSWER : this.WRONG_ANSWER;
    }
  }
  solveToothNumberTest() {
    // console.log('number solved');
    const items = this.data.filter(item => item[this.selectedMode] === this.selectedToothNumber);
    if (items.length === 1) {
      const text = items[0]['name'];
      this.outputToothNumber = text;
    }
  }

  resetToothNameTest() {
    // console.log('name reset');
    const r = this.getRandomInt(1, this.data.length);
    const text = this.data[r]['name'];
    this.selectedToothName = text;
    this.outputToothName = '';
    this.toothNumberInput = '';
  }
  checkToothNameTest() {
    // console.log('name checked');
    // console.log(this.toothNumberInput);
    const items = this.data.filter(item => item.name === this.selectedToothName);
    if (items.length === 1) {
      if (this.selectedMode === 'iso'){

      } else if (this.selectedMode === 'std'){

      }

      const t = items[0][this.selectedMode] == this.toothNumberInput;
      this.outputToothName = t ? this.RIGHT_ANSWER : this.WRONG_ANSWER;
    } else {
      this.outputToothName = this.WRONG_ANSWER;
    }

  }
  solveToothNameTest() {
    // console.log('name solved');
    const items = this.data.filter(item => item.name === this.selectedToothName);
    if (items.length === 1) {
      const text = items[0][this.selectedMode];
      this.outputToothName = text;
    }
  }

  resetPrimaryToothNumberTest() {
    // console.log('p number reset');
    const r = this.getRandomInt(1, this.babies.length);
    const text = this.babies[r][this.selectedMode];
    this.selectedPrimaryToothNumber = text;
    this.outputPrimaryToothNumber = '';
    this.selectedPrimaryTop = '';
    this.selectedPrimarySide = '';
    this.selectedPrimaryTooth = '';
  }
  checkPrimaryToothNumberTest() {
    // console.log('p number checked');
    // console.log( this.selectedPrimaryTop + ' ' + this.selectedPrimarySide + ' ' + this.selectedPrimaryTooth);
    const items = this.babies.filter(item => item[this.selectedMode] === this.selectedPrimaryToothNumber);
    if (items.length === 1) {
      const t = items[0]['name'].toLowerCase() ==
      (this.selectedPrimaryTop + ' ' + this.selectedPrimarySide + ' ' + this.selectedPrimaryTooth).toLowerCase();
      this.outputPrimaryToothNumber = t ? this.RIGHT_ANSWER : this.WRONG_ANSWER;
    }
  }
  solvePrimaryToothNumberTest() {
    // console.log('number solved');
    const items = this.babies.filter(item => item[this.selectedMode] === this.selectedPrimaryToothNumber);
    if (items.length === 1) {
      const text = items[0]['name'];
      this.outputPrimaryToothNumber = text;
    }
  }

  resetPrimaryToothNameTest() {
    // console.log('p name reset');
    const r = this.getRandomInt(1, this.babies.length);
    const text = this.babies[r]['name'];
    this.selectedPrimaryToothName = text;
    this.outputPrimaryToothName = '';
    this.primaryToothNumberInput = '';
  }
  checkPrimaryToothNameTest() {
    // console.log('p name checked');
    // console.log(this.primaryToothNumberInput);
    const items = this.babies.filter(item => item.name === this.selectedPrimaryToothName);
    if (items.length === 1 && this.primaryToothNumberInput !== undefined) {
      if (this.selectedMode === 'iso'){
        const t = items[0][this.selectedMode] == this.primaryToothNumberInput;
        this.outputPrimaryToothName = t ? this.RIGHT_ANSWER : this.WRONG_ANSWER;
      } else if (this.selectedMode === 'std'){
        const t = items[0][this.selectedMode].toLowerCase() == this.primaryToothNumberInput.toLowerCase();
        this.outputPrimaryToothName = t ? this.RIGHT_ANSWER : this.WRONG_ANSWER;
      }
    } else {
      this.outputPrimaryToothName = this.WRONG_ANSWER;
    }

  }
  solvePrimaryToothNameTest() {
    // console.log('p name solved');
    const items = this.babies.filter(item => item.name === this.selectedPrimaryToothName);
    if (items.length === 1) {
      const text = items[0][this.selectedMode];
      this.outputPrimaryToothName = text;
    }
  }
}
