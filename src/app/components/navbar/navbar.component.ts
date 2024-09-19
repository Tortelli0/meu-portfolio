import { NgClass, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { LinkNavbar } from './models/link-navbar';

@Component
({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, NgForOf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent 
{
  public colapsarNavBar: boolean = false;

  public linksNavBar: LinkNavbar[] = [
    { href: "#sobre", texto: "Sobre mim" },
    { href: "#habilidades", texto: "Minhas Habilidades" },
    { href: "#stack", texto: "Stack" },
    { href: "#experiencias", texto: "Experiências" },
    { href: "#portfolio", texto: "Portfólio" },
  ];
}
