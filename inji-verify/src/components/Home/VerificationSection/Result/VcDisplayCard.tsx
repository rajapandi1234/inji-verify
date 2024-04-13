import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import {convertToTitleCase, getDisplayValue} from "../../../../utils/misc";
import StyledButton from "../commons/StyledButton";
import {SAMPLE_VERIFIABLE_CREDENTIAL} from "../../../../utils/samples";
import {SetActiveStepFunction} from "../../../../types/function-types";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import {VerificationSteps} from "../../../../utils/config";

function VcDisplayCard({vc, setActiveStep}: {vc: any, setActiveStep: SetActiveStepFunction}) {
    return (
        <Box>
            <Grid container style={{
                width: "calc(min(400px, 90vw))",
                margin: "auto",
                background: "white",
                borderRadius: "12px",
                padding: "5px 15px",
                boxShadow: "0px 3px 15px #0000000F",
                maxHeight: "320px",
                overflowY: "hidden"
            }}>
                {
                    vc ? Object.keys(vc.credentialSubject)
                        .filter(key => key?.toLowerCase() !== "id" && key?.toLowerCase() !== "type")
                        .map(key => (
                            <Grid item xs={12} lg={6} key={key} style={{
                                padding: "10px 4px"
                            }}>
                                <Typography style={{
                                    font: "normal normal normal 11px/14px Inter",
                                    marginBottom: "4px"
                                }}>
                                    {convertToTitleCase(key)}
                                </Typography>
                                <Typography style={{font: "normal normal 600 12px/15px Inter"}}>
                                    {getDisplayValue(vc.credentialSubject[key])}
                                </Typography>
                            </Grid>
                        ))
                        : (
                            <Box
                                style={{
                                    display: 'grid',
                                    placeContent: 'center',
                                    width: '100%',
                                    height: '320px',
                                    color: 'rgb(0, 0, 0, 0.1)',
                                    fontSize: '100px'
                                }}
                            >
                                <DescriptionOutlinedIcon fontSize={"inherit"} color={"inherit"}/>
                            </Box>
                        )
                }
            </Grid>
            <Box style={{
                display: 'grid',
                placeContent: 'center'
            }}>
                <StyledButton style={{margin: "24px auto"}} onClick={() => {
                    setActiveStep(VerificationSteps.ScanQrCodePrompt)
                }}>
                    Scan Another QR Code
                </StyledButton>
            </Box>
        </Box>
    );
}

export default VcDisplayCard;
