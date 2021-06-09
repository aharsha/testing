class Student
{
    rollno: number;
    name: string;
    marks:number;

    constructor(rno: number, nm: string)
    {
        var x:number;
        let y:number;
      this.rollno=rno;
      this.name=nm;
    }
 setStudent(rno: number, nm: string)
    {
      this.rollno=rno;
      this.name=nm;
    }
}