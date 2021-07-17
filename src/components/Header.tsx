interface HeaderProps {
    selectedGenreTitle: string;
}

export function Header(props:HeaderProps) {
    return(
        <header>
          <span className="category">Categoria:<span> {props.selectedGenreTitle}</span></span>
        </header>
    )
}