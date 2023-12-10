const appSettings = {
    base_url:"http://anything/url",
}

let variable = appSettings

if (__DEV__) {
    variable = appSettings
}

export default variable;