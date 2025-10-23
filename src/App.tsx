import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    Chip,
    Stack,
    Paper,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import {
    Code,
    Palette,
    Group,
    CheckCircle,
} from '@mui/icons-material';

function App() {
    const features = [
        {
            icon: <Palette sx={{ fontSize: 40, color: 'primary.main' }} />,
            title: "Design System Unificado",
            description: "Componentes consistentes para todas las aplicaciones de la universidad"
        },
        {
            icon: <Code sx={{ fontSize: 40, color: 'secondary.main' }} />,
            title: "Desarrollo Eficiente",
            description: "Reutiliza componentes y acelera el desarrollo"
        },
        {
            icon: <Group sx={{ fontSize: 40, color: 'success.main' }} />,
            title: "Colaboración Mejorada",
            description: "Designers y developers trabajando en conjunto"
        }
    ];

    const steps = [
        {
            step: "1",
            title: "Instalación",
            description: "Instala el paquete del design system en tu proyecto"
        },
        {
            step: "2",
            title: "Importación",
            description: "Importa los componentes que necesites"
        },
        {
            step: "3",
            title: "Implementación",
            description: "Usa los componentes siguiendo las guías"
        },
        {
            step: "4",
            title: "Testing",
            description: "Verifica en Storybook antes de implementar"
        }
    ];

    const components = [
        "Botones (Button)",
        "Inputs y Formularios",
        "Tarjetas (Card)",
        "Navegación (AppBar)",
        "Tipografía",
        "Colores y Temas",
        "Iconos",
        "Modales y Dialogs"
    ];

    return (
        <Box sx={{ flexGrow: 1, backgroundColor: 'background.default', minHeight: '100vh' }}>
            <Box sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                py: 10,
                textAlign: 'center'
            }}>
                <Container maxWidth="lg">
                    <Chip
                        label="v1.0.0 - Stable"
                        sx={{
                            backgroundColor: 'white',
                            color: 'primary.main',
                            fontWeight: 600,
                            mb: 3
                        }}
                    />
                    <Typography variant="h2" component="h1" sx={{
                        fontWeight: 700,
                        color: '#fff',
                        mb: 3
                    }}>
                        Design System Universidad Siglo 21
                    </Typography>
                    <Typography variant="h5" sx={{
                        mb: 4,
                        fontWeight: 400,
                        color: '#fff',
                        maxWidth: 800,
                        mx: 'auto'
                    }}>
                        Sistema de diseño unificado para garantizar consistencia, accesibilidad y eficiencia
                        en el desarrollo de aplicaciones de la universidad.
                    </Typography>
                </Container>
            </Box>

            {/* What is Storybook Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={6} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h3" component="h2" sx={{ mb: 3 }}>
                            ¿Qué es Storybook?
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', lineHeight: 1.7 }}>
                            Storybook es una herramienta de desarrollo frontend para crear componentes UI de forma aislada.
                            Nos permite desarrollar, probar y documentar componentes de manera independiente.
                        </Typography>
                        <List>
                            {[
                                "Desarrollo aislado de componentes",
                                "Documentación interactiva",
                                "Testing visual automatizado",
                                "Colaboración entre equipos"
                            ].map((item, index) => (
                                <ListItem key={index} sx={{ px: 0 }}>
                                    <ListItemIcon sx={{ minWidth: 40 }}>
                                        <CheckCircle color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Paper sx={{ p: 4, backgroundColor: 'background.paper' }}>
                            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                                Comandos útiles de Storybook
                            </Typography>
                            <Box sx={{
                                backgroundColor: 'grey.100',
                                p: 3,
                                borderRadius: 2,
                                fontFamily: 'monospace',
                                fontSize: '0.9rem'
                            }}>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="caption" color="text.secondary">
                                        # Iniciar Storybook
                                    </Typography>
                                    <Typography>npm run storybook</Typography>
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="caption" color="text.secondary">
                                        # Build de Storybook
                                    </Typography>
                                    <Typography>npm run build-storybook</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="caption" color="text.secondary">
                                        # Ejecutar tests
                                    </Typography>
                                    <Typography>npm run test-storybook</Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>

            {/* Benefits Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography variant="h3" component="h2" textAlign="center" sx={{ mb: 2 }}>
                    Beneficios del Design System
                </Typography>
                <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
                    Mejora la calidad y consistencia de nuestras aplicaciones
                </Typography>

                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                                    {feature.icon}
                                    <Typography variant="h5" component="h3" sx={{ mt: 2, mb: 2, fontWeight: 600 }}>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Implementation Steps */}
            <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h2" textAlign="center" sx={{ mb: 6 }}>
                        Cómo implementar el Design System
                    </Typography>
                    <Grid container spacing={4}>
                        {steps.map((step, index) => (
                            <Grid size={{ xs: 12, md: 3 }} key={index}>
                                <Paper sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                                    <Box sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: '50%',
                                        backgroundColor: 'primary.main',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.5rem',
                                        fontWeight: 700,
                                        mx: 'auto',
                                        mb: 3
                                    }}>
                                        {step.step}
                                    </Box>
                                    <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
                                        {step.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {step.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Components List */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
                            Componentes Disponibles
                        </Typography>
                        <Grid container spacing={2}>
                            {components.map((component, index) => (
                                <Grid size={{ xs: 12, md: 6 }} key={index}>
                                    <Card variant="outlined" sx={{ p: 2 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <CheckCircle color="success" sx={{ mr: 2 }} />
                                            <Typography>{component}</Typography>
                                        </Box>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}></Grid>
                </Grid>
            </Container>

            {/* Footer */}
            <Box sx={{
                backgroundColor: 'background',
                py: 6,
                borderTop: `1px solid #ddd`
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography variant="h6" component="div" sx={{
                                fontWeight: 700,
                                color: 'primary.main',
                                mb: 1
                            }}>
                                Design System Universidad Siglo 21
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Sistema de diseño unificado para aplicaciones internas - v1.0.0
                            </Typography>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Stack direction="row" spacing={2} justifyContent="flex-end">
                                <a style={{ color: '#00a98f' }} href="https://storybook.js.org/"><Button color="inherit">Documentación</Button></a>
                                <a style={{ color: '#00a98f' }} href="https://storybook.js.org/"><Button color="inherit">GitHub</Button></a>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default App;