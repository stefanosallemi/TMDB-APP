import * as React from 'react';
import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';

interface Props {
    vote_average: string;
}

export function CircularProgressWithLabel(
    props: CircularProgressProps & { value: number },
) {
    const [loader, setLoader] = useState<string>("indeterminate");

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoader("determinate");
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const variant = loader === "indeterminate" ? "indeterminate" : "determinate";

    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant={variant} {...props} />
            <Box
                sx={{
                    right: "0",
                    position: 'relative',
                    display: 'flex',
                    flexDirection: "row-reverse",
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    sx={{
                        marginLeft: "-2.5rem",
                        marginTop: "0.12rem"
                    }}
                    variant="caption"
                    component="div"
                    color="text.primary"
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}

export default function CircularStatic() {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return <CircularProgressWithLabel value={progress} />;
}