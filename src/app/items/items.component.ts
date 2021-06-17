import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
items=[
  {
    'src':'../../assets/images/maths.jpg',
  'name':'MATH',
  'desc':" Various topics that might enrich an elementary school mathematics program, including probability and statistics, the integers, rational and real numbers, clock arithmetic, diophantine equations, geometry and transformations, the metric system, relations and functions. ",
  'oprice':'2455',
  'nprice':'1499',
  'specific':["Duration : 6 months","Lecturers: 4","Per week 5 live sessions","Week ends assessments"]
  },
  {
    'src':'../../assets/images/science1.jpg',
  'name':'SCIENCE',
  'desc':'We intended to allow individuals to understand the relationships that science, technology, and society share in our everyday world. Each subject uses laboratory, classroom, and technology activities to illustrate the nature of science and how scientific knowledge evolves',
  'oprice':'1500',
  'nprice':'999',
  'specific':["Duration : 6 months","Lecturers: 12","Per week 5 live sessions","Per week 2 live practical sessions","Week ends assessments"]
  },
  {
    'src':'../../assets/images/SocialScience1.jpg',
  'name':'SOCIAL SCIENCE',
  'desc':'social sciences are those subjects which examine and explain human beings. This includes a variety of ways – from understanding how minds work, to how societies as a whole function.',
  'oprice':'2000',
  'nprice':'999',
  'specific':["Duration : 3 months","Lecturers: 3","Per week 5 live sessions","Week ends assessments"]
  },
  {
  'src':'../../assets/images/cs.jpg',
  'name':'COMPUTER SCIENCE',
  'desc':"This short course provides an introduction to the most essential aspects of computing and a survey of applications in today's emerging field of digital technology, while exploring their confluence and innovation thinking. Students will learn fundamentals of problem solving and programming using Python. Students will also be introduced to artificial intelligence, blockchain technologies, cybersecurity fundamentals, data analysis and visualization and software engineering.",
  'oprice':'10000',
  'nprice':'9500',
  'specific':["Duration : 6 months","Lecturers: 7","Per week 5 live sessions","All are live practical sessions","Week ends assessments","Work on 1 Live project"]
  },
  {
  'src':'../../assets/images/eng.jpg',
  'name':'ENGLISH',
  'desc':"You will have a deeper knowledge of the English language as well as its practical application in the different facets of your life. You'll no longer be confused about tenses and other grammatical rules.",
  'oprice':'6000',
  'nprice':'5500',
  'specific':["Duration : 4 months","Lecturers: 12","Per week 5 live sessions","Group Discussions will be conducted","Essay Writting","Week ends assessments"]
  },
  {
  'src':'../../assets/images/hindi.jpg',
  'name':'HINDI',
  'desc':'Course develops basic language skills in Hindi within the socio-cultural context of India and South Asia. Content includes alphabets, pronunciation, vocabulary, grammatical rules, reading comprehension, listening comprehension and oral and written real life situational conversation.',
  'oprice':'800',
  'nprice':'500',
  'specific':["Duration : 2 months","Lecturers: 5","Per week 5 live sessions","Week ends assessments"]
  },
];

  constructor(private router : Router,private itemService: ItemService) { }
gridClicked(item: any){
  console.log(item);
  this.itemService.clickedItem = item;
  this.router.navigateByUrl('/itemDetails')
}
backClicked(){
  this.router.navigateByUrl('/login')
}
  ngOnInit(): void {
  }

}
