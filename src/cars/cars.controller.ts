import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

    constructor (
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllcars(){
        return this.carsService.findAll()
    }
    @Get(':id')
    getCarById( @Param('id',ParseUUIDPipe ) id:string){
        console.log({ id })
        // throw new Error('auxilio')
        return this.carsService.findOnebyId(id)
    }
    @Post()
    createCar(@Body() createCarDto: CreateCarDto){
        return this.carsService.create(createCarDto)
    }

    @Patch(':id')
    updateCar(
        @Param('id',ParseUUIDPipe) id: string,
        @Body() updateCar: UpdateCarDto)
    {
        return this.carsService.update(id,updateCar)
    }
    @Delete(':id')
    deleteCar(@Param('id',ParseUUIDPipe) id:string){
        return this.carsService.delete(id)
    }
}
