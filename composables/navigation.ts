export const useGoBack = () => {
    return useRouter().go(-1);
}

export const useGoToPage = (path: string) => {
    return useRouter().push(path);
}