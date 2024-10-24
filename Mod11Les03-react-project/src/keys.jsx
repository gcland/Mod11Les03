//Enter timestamp

export const ts = "1729791479"

//Enter user api key

export const apikey = "6e02fa6784811ecae273883b8655fac7"

//Generate hash by marvel guidelines as noted here: https://developer.marvel.com/documentation/authorization which states hash = md5 output with input = '{ts}{privatekey}{publickey}'
//md5 generator: https://www.md5hashgenerator.com/

export const hash = "b42d8cca4d6b831e1d3efa5ae5f6312a"

//`https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=100&ts=${ts}&apikey=${apikey}&hash=${hash}`;



