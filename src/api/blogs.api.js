import baseApiUrl from "./api";

export const getBlogs = () => {
    const getBlogsUrl =
        baseApiUrl +
        "?" +
        new URLSearchParams({
            pretty: true,
            query: '{"type":"blogs"}',
            read_key: `${process.env.REACT_APP_COSMIC_READ_KEY}`,
            // limit: 20,
            props: "slug,title,metadata", // metadata.{field} can be used to limit the metadata responses
        });

    return fetch(`${getBlogsUrl}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            const sortedData = data.objects
                .filter((data) => data.metadata.visibility !== "hidden") // Remove any projects that are marked "hidden"
                .sort((a, b) => {
                    return (
                        new Date(b.metadata.date) - new Date(a.metadata.date)
                    );
                }); // Sorts the returned data on the date_id field, with higher id's first
            return sortedData;
        })
        .catch((error) => {
            return error;
        });
};

export const getBlog = (blogSlug) => {
    const getBlogsUrl =
        baseApiUrl +
        "?" +
        new URLSearchParams({
            pretty: true,
            query: `{"slug":"${blogSlug}"}`,
            read_key: `${process.env.REACT_APP_COSMIC_READ_KEY}`,
            // limit: 20,
            props: "slug,title,metadata", // metadata.{field} can be used to limit the metadata responses
        });

    return fetch(`${getBlogsUrl}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            const sortedData = data.objects
                .filter((data) => data.metadata.visibility !== "hidden") // Remove any projects that are marked "hidden"
                .sort((a, b) => {
                    return (
                        new Date(b.metadata.date) - new Date(a.metadata.date)
                    );
                }); // Sorts the returned data on the date_id field, with higher id's first
            return sortedData;
        })
        .catch((error) => {
            return error;
        });
};
