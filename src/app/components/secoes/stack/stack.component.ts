import { Component } from '@angular/core';
import { ItemsStack } from './models/item-stack';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [NgFor],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss'
})
export class StackComponent {
  public itensStack: ItemsStack[] = [
    {titulo: ".Net"},
    {titulo: "Angular"},
    {titulo: "TypeScript"},
    {titulo: "Node.js"},
    {titulo: "Discord.js"},
    {titulo: "Firebase"},
    {titulo: "Entity Framework"},
    {titulo: "Microsoft SQL Server"},
    {titulo: "MongoDB"},
    {titulo: "Selenium"},
    {titulo: "Cypress"}
  ]
}
