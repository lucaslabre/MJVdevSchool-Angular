import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(cpf: string): string {
    const cpfSplit = cpf.split("");
    const cpfFormat = `${cpfSplit[0]}${cpfSplit[1]}${cpfSplit[2]}.${cpfSplit[3]}${cpfSplit[4]}${cpfSplit[5]}.${cpfSplit[6]}${cpfSplit[7]}${cpfSplit[8]}-${cpfSplit[9]}${cpfSplit[10]}`;
    return cpfFormat;
  }

}
