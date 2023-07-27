interface Tab {
    id: string
    url: string
    title: string
    canGoBack?: boolean
    canGoForward?: boolean
    favicons?: string[]
    isLoading?: boolean
    frameName?: string
}