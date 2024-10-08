import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        // <ListItem key={product.id}>
        //     <ListItemAvatar>
        //         <Avatar src={product.pictureUrl} />
        //     </ListItemAvatar>
        //     <ListItemText>
        //         {product.name} - {product.price}
        //     </ListItemText>
        // </ListItem>

        <Card>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'secondary.main' }}>
                        {product.name.charAt(0).toLocaleUpperCase()}
                    </Avatar>
                }
                title={product.name}
                titleTypographyProps={{
                    sx: { fontWeight: 'bold', color: 'primary.main' }
                }}
            />
            <CardMedia
                sx={{ height: 140, backgroundSize: "contain", bgcolor: 'primary.main' }}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                    $ {(product.price).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add To Cart</Button>
                <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
            </CardActions>
        </Card>
    )
}