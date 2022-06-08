import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    OutlinedInput,
    TextField,
    Typography,
    useMediaQuery
} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel'


// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// ===========================|| FIREBASE - REGISTER ||=========================== //

const FirebaseRegister = () => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const [showPassword, setShowPassword] = useState(false);
    const [checked, setChecked] = useState(true);

    const [strength, setStrength] = useState(0);
    const [level, setLevel] = useState();


    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setStrength(temp);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('123456');
    }, []);

    const onChangeHandler = (e) => {
        console.log(e.target.value);
    };


    return (
        <>
            <Grid container direction="column" justifyContent="center" >
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2, mt: -5 }}>
                        <Typography variant="subtitle1">User Registration</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Formik
                initialValues={{
                    name: '',
                    empid: '',
                    dzongkhag: '',
                    mobile: '',
                    phone: '',
                    branch: '',
                    address: '',
                    cid: '',
                    department: '',
                    designation: '',
                    email: '',
                    password: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string().required('Name is required'),
                    empid: Yup.string().max(15).required('Emp-id is required'),
                    dzongkhag: Yup.string().required('Dzongkhag is required'),
                    mobile: Yup.number().required('Mobile No is required'),
                    branch: Yup.string().required('branch is required'),
                    address: Yup.string().required('Address is required'),
                    cid: Yup.number().required('Cid is required'),
                    department: Yup.array().min(1).of(Yup.string().required()).required('Department is required'),
                    designation: Yup.string().required('Designation is required'),
                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                    password: Yup.string().max(255).min(8).required('Password is required')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        if (scriptedRef.current) {
                            setStatus({ success: true });
                            setSubmitting(false);
                        }
                    } catch (err) {
                        console.error(err);
                        if (scriptedRef.current) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }}
            >
                {({ errors, handleBlur, handleSubmit, handleChange, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} >
                        <Grid container spacing={matchDownSM ? 0 : 2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    margin="normal"
                                    name="name"
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                        handleChange(e);
                                        onChangeHandler(e)
                                    }}
                                    type="text"


                                />
                                {touched.name && errors.name && (
                                    <FormHelperText error id="standard-weight-helper-text--register">
                                        {errors.name}
                                    </FormHelperText>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Emp-Id"
                                    margin="normal"
                                    name="empid"
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                        handleChange(e);
                                        onChangeHandler(e)
                                    }}
                                    type="text"


                                />
                                {touched.empid && errors.empid && (
                                    <FormHelperText error id="standard-weight-helper-text--register">
                                        {errors.empid}
                                    </FormHelperText>
                                )}
                            </Grid>
                        </Grid>
                        <Grid container spacing={matchDownSM ? 0 : 2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Dzongkhag"
                                    margin="normal"
                                    name="dzongkhag"
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                        handleChange(e);
                                        onChangeHandler(e)
                                    }}
                                    type="text"


                                />
                                {touched.dzongkhag && errors.dzongkhag && (
                                    <FormHelperText error id="standard-weight-helper-text--register">
                                        {errors.dzongkhag}
                                    </FormHelperText>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Mobile No."
                                    margin="normal"
                                    name="mobile"
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                        handleChange(e);
                                        onChangeHandler(e)
                                    }}
                                    type="number"


                                />
                                {touched.mobile && errors.mobile && (
                                    <FormHelperText error id="standard-weight-helper-text--register">
                                        {errors.mobile}
                                    </FormHelperText>
                                )}
                            </Grid>
                        </Grid>
                        <Grid container spacing={matchDownSM ? 0 : 2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Phone No."
                                    margin="normal"
                                    name="phone"
                                    type="number"
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                        handleChange(e);
                                        onChangeHandler(e)
                                    }}


                                />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id='select'
                                    fullWidth
                                    label="Branch"
                                    margin='normal'
                                    name='branch'
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                        handleChange(e);
                                        onChangeHandler(e)
                                    }}
                                    select
                                >
                                    <MenuItem value='thimphu'>Thimphu</MenuItem>
                                    <MenuItem value="paro">Paro </MenuItem>
                                    <MenuItem value="punakha">Punakha</MenuItem>
                                </TextField>
                                {touched.branch && errors.branch && (
                                    <FormHelperText error id="standard-weight-helper-text--register">
                                        {errors.branch}
                                    </FormHelperText>
                                )}
                            </Grid>
                        </Grid>
                        <Grid container spacing={matchDownSM ? 0 : 2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Address"
                                    margin="normal"
                                    name="address"
                                    type="text"
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                        handleChange(e);
                                        onChangeHandler(e)
                                    }}


                                />
                                {touched.address && errors.address && (
                                    <FormHelperText error id="standard-weight-helper-text--register">
                                        {errors.address}
                                    </FormHelperText>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="CID"
                                    margin="normal"
                                    name="cid"
                                    type="text"
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                        handleChange(e);
                                        onChangeHandler(e)
                                    }}


                                />
                                {touched.cid && errors.cid && (
                                    <FormHelperText error id="standard-weight-helper-text--register">
                                        {errors.cid}
                                    </FormHelperText>
                                )}
                            </Grid>
                        </Grid>
                        <Grid container spacing={matchDownSM ? 0 : 2}>
                            <Grid item xs={12} sm={6}>
                             
                                <TextField
                                    id='select'
                                    fullWidth
                                    label="Department"
                                    margin='normal'
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                        handleChange(e);
                                        onChangeHandler(e)
                                    }}
                                    select
                                >
                                    <MenuItem value='IT department'>IT department</MenuItem>
                                    <MenuItem value="Claims Department">Claims Department </MenuItem>
                                    <MenuItem value="Finance Department">Finance Department</MenuItem>
                                </TextField>
                                {touched.department && errors.department && (
                                    <FormHelperText error id="standard-weight-helper-text--register">
                                        {errors.department}
                                    </FormHelperText>
                                )}

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Designation"
                                    margin="normal"
                                    name="designation"
                                    onBlur={handleBlur}
                                    onChange={(e) => {
                                        handleChange(e);
                                        onChangeHandler(e)
                                    }}
                                    type="text"


                                />
                                {touched.designation && errors.designation && (
                                    <FormHelperText error id="standard-weight-helper-text--register">
                                        {errors.designation}
                                    </FormHelperText>
                                )}
                            </Grid>
                        </Grid>
                       
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-email-register">Email Address / Username</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-email-register"
                                type="email"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    onChangeHandler(e)
                                }}
                                inputProps={{}}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text--register">
                                    {errors.email}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password-register"
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                name="password"
                                label="Password"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    handleChange(e);
                                    onChangeHandler(e)
                                    changePassword(e.target.value);
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            size="large"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                inputProps={{}}
                            />
                            {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text-password-register">
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </FormControl>

                        {strength !== 0 && (
                            <FormControl fullWidth>
                                <Box sx={{ mb: 2 }}>
                                    <Grid container spacing={2} alignItems="center">
                                        <Grid item>
                                            <Box
                                                style={{ backgroundColor: level?.color }}
                                                sx={{ width: 85, height: 8, borderRadius: '7px' }}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="subtitle1" fontSize="0.75rem">
                                                {level?.label}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </FormControl>
                        )}

                        <Grid container alignItems="center" justifyContent="space-between">
                            <Grid item>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={checked}
                                            onChange={(event) => setChecked(event.target.checked)}
                                            name="checked"
                                            color="primary"
                                        />
                                    }
                                    label={
                                        <Typography variant="subtitle1">
                                            Agree with &nbsp;
                                            <Typography variant="subtitle1" component={Link} to="#">
                                                Terms & Condition.
                                            </Typography>
                                        </Typography>
                                    }
                                />
                            </Grid>
                        </Grid>
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}

                        <Box sx={{ mt: 2 }}>
                            <AnimateButton>
                                <Button
                                    disableElevation
                                    disabled={isSubmitting}
                                    fullWidth
                                    size="large"
                                    type="submit"
                                    variant="contained"
                                    color="secondary"
                                >
                                    Sign up
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );

};

export default FirebaseRegister;
