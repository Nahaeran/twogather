import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpaceImagesService } from './space_images.service';
import { CreateSpaceImageDto } from './dto/create-space_image.dto';
import { UpdateSpaceImageDto } from './dto/update-space_image.dto';

@Controller('space-images')
export class SpaceImagesController {
  constructor(private readonly spaceImagesService: SpaceImagesService) {}

  @Post()
  create(@Body() createSpaceImageDto: CreateSpaceImageDto) {
    return this.spaceImagesService.create(createSpaceImageDto);
  }

  @Get()
  findAll() {
    return this.spaceImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spaceImagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpaceImageDto: UpdateSpaceImageDto) {
    return this.spaceImagesService.update(+id, updateSpaceImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spaceImagesService.remove(+id);
  }
}
