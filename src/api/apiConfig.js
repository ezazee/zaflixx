const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'badabb2d42d1d55cd95c6a4bb1983893',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;