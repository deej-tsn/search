function capitalizeFirstLetter(s: string) {
    return (s.length > 0)? s.charAt(0).toUpperCase() + s.slice(1) : "";
}

export { capitalizeFirstLetter}